/*
 * The tiles in this panel are shown and hidden imperatively by App.showExtraTiles, which finds them by
 * their element ids, so these tests read the rendered ids rather than accessible roles.
 */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExtraTiles from "./ExtraTiles";
import { EXPANSIONS } from "../data/tileData";

const noExpansions = Object.fromEntries(
  Object.values(EXPANSIONS).map((expansion) => [expansion, false]),
);

function renderPanel(props = {}) {
  return render(
    <ExtraTiles
      visible={true}
      overlayVisible={false}
      includedExpansions={noExpansions}
      showAllExtraTiles={true}
      customMapBuilding={false}
      toggleShowAllExtraTiles={() => {}}
      toggleCustomMapBuilding={() => {}}
      {...props}
    />,
  );
}

const sectionHeaders = () =>
  screen
    .getAllByRole("button", { expanded: true })
    .map((button) => button.textContent.replace(/[▸▾]/g, ""));

const tileIds = () =>
  [...document.querySelectorAll("img.tile")].map((tile) =>
    tile.id.replace("extra-", ""),
  );

test("groups tiles into base game and home world sections by default", () => {
  renderPanel();

  expect(sectionHeaders()).toEqual(["Base Game", "Home Worlds"]);
  // Base game blue/red tiles and base game home worlds, but nothing from an expansion
  expect(tileIds()).toContain("25");
  expect(tileIds()).toContain("1");
  expect(tileIds()).not.toContain("52");
});

test("adds a section for each enabled expansion", () => {
  renderPanel({
    includedExpansions: {
      ...noExpansions,
      [EXPANSIONS.POK]: true,
      [EXPANSIONS.DS]: true,
    },
  });

  expect(sectionHeaders()).toEqual([
    "Base Game",
    EXPANSIONS.POK,
    "Home Worlds",
  ]);
  // Prophecy of Kings tiles, plus Discordant Stars home worlds
  expect(tileIds()).toContain("59");
  expect(tileIds()).toContain("3201");
});

test("adds the empty tile and hyperlane sections while building custom maps", () => {
  renderPanel({ customMapBuilding: true });

  expect(sectionHeaders()).toEqual([
    "Empty",
    "Base Game",
    "Home Worlds",
    "Hyperlanes",
  ]);
  expect(tileIds()).toContain("-1");
  expect(tileIds()).toContain("83A");
});

test("searches by tile number, planet name, and planet trait", () => {
  const showExtraTiles = jest.fn();
  renderPanel({
    showExtraTiles: showExtraTiles,
    includedExpansions: { ...noExpansions, [EXPANSIONS.TE]: true },
  });
  const search = screen.getByLabelText("Search tiles");

  fireEvent.change(search, { target: { value: "26" } });
  expect(tileIds()).toEqual(["26"]);
  expect(showExtraTiles).toHaveBeenCalled();

  fireEvent.change(search, { target: { value: "jord" } });
  expect(tileIds()).toEqual(["1"]);

  fireEvent.change(search, { target: { value: "cultural" } });
  expect(tileIds().length).toBeGreaterThan(1);
  expect(tileIds()).not.toContain("1");

  fireEvent.change(search, { target: { value: "not a tile" } });
  expect(tileIds()).toEqual([]);
  expect(screen.getByText("No tiles match your search.")).not.toBeNull();

  // Thunder's Edge planets can have more than one trait
  fireEvent.change(search, { target: { value: "olergodt" } });
  expect(tileIds()).toEqual(["101"]);

  fireEvent.click(screen.getByLabelText("Clear search"));
  expect(tileIds().length).toBeGreaterThan(1);
});

test("collapses and expands a section", () => {
  renderPanel();
  const baseHeader = screen.getAllByRole("button", { expanded: true })[0];

  fireEvent.click(baseHeader);
  expect(baseHeader.getAttribute("aria-expanded")).toBe("false");
  expect(baseHeader.nextSibling.className).toContain("d-none");

  fireEvent.click(baseHeader);
  expect(baseHeader.nextSibling.className).not.toContain("d-none");
});

test("shows search hints when the question mark is clicked", () => {
  renderPanel();

  expect(screen.queryByText("Searching for Tiles")).toBeNull();

  fireEvent.click(screen.getByTitle("Search help"));
  expect(screen.getByText("Searching for Tiles")).not.toBeNull();
});
