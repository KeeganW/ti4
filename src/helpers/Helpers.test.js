import { clockwiseAngleFromTop } from "./Helpers";
import boardData from "../data/boardData.json";

describe("clockwiseAngleFromTop", () => {
  it("puts the top of the board first and counts clockwise", () => {
    // 37 is the top of ring 4, 40 the next tile clockwise, 58 the last one before the top again.
    expect(clockwiseAngleFromTop(37)).toBeCloseTo(0);
    expect(clockwiseAngleFromTop(40)).toBeGreaterThan(0);
    expect(clockwiseAngleFromTop(40)).toBeLessThan(90);
    expect(clockwiseAngleFromTop(58)).toBeGreaterThan(270);
  });

  it("seats the 7 player warp board starting from the home system at the top", () => {
    let homeWorlds = boardData.styles["7"]["warp"]["home_worlds"];
    let seated = [...homeWorlds].sort(
      (a, b) => clockwiseAngleFromTop(a) - clockwiseAngleFromTop(b) || a - b,
    );

    // Player one is the top home system, not the lowest numbered position (22, in ring 3).
    expect(seated).toEqual(homeWorlds);
    expect(seated[0]).toBe(37);
  });
});
