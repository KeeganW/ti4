/**
 * Prevent the normal submission of the generate form, and instead force it to make an ajax request,
 * then draw the generated map onto the screen.
 */
generateForm.submit(function(e) {
    // Prevent normal submission of the page
    e.preventDefault();

    // Get the form data
    let form = $(this);
    let playerNames = $("#playerNameForm")
    let includedRaces = $("#includedRacesForm")
    let url = form.attr('action');

    // Make ajax call to generate
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize() + "&" + playerNames.serialize() + "&" + includedRaces.serialize(),
        success: function (response) {
            // Render the tiles to the screen
            renderTiles(response)
            if ($(window).width() <= 700) {
                toggleOptionsContainer()
            }
        },
        error: function (response) {
            console.log("Error...")
            console.log(response)
        }
    });
    return false
});

/**
 * Copies a given element to the clipboard of the user to share with. First, generate a temporary input
 * and add it to the body of the page. Then, copy the text to that element, and then to the user's
 * clipboard. Finally, remove the temporary element.
 * @param element An element to get the text of to put on the user's clipboard.
 */
function copyToClipboard(element) {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

/**
 * Get the possible board styles the given player count can have
 */
playerCount.change(function () {
    // Clear the current select
    boardStyle.html("")

    // Add in new options from boardStyles
    for (let styleIndex in BOARD_STYLES[playerCount.val()]) {
        let style = BOARD_STYLES[playerCount.val()][styleIndex]
        boardStyle.append(
            // Capitalize the board style
            "<option value=\"" + style + "\">" + style.charAt(0).toUpperCase() + style.slice(1) + "</option>"
        )
    }
})

/**
 * Prevent the normal submission of the tile form, and instead attempt to parse it and draw the map to
 * the screen.
 */
tileForm.submit(function(e) {
    // Prevent normal submission of the page
    e.preventDefault();

    // Render the tiles from the tileStringInput
    renderTiles(validateTiles(tileStringInput.val()))
});

/**
 * Allow for the toggling of options from the hamburger menu. Changes the options display and how
 * the map is rendered. Redraws map in case the map can now fit in the middle of the screen.
 */
function toggleOptionsContainer() {
    optionsContainer.toggle()
    if (optionsContainer.css("display") === "none") {
        document.documentElement.style.setProperty('--options-width', '0px');
        $("#toggleOptions .icon-expand").css("display", "block");
        $("#toggleOptions .icon-contract").css("display", "none");
        toggleOptions.addClass("hidden");
        // mapContainer.addClass("w-100");
        drawMap();
    } else {
        document.documentElement.style.setProperty('--options-width', '400px');
        $("#toggleOptions .icon-expand").css("display", "none");
        $("#toggleOptions .icon-contract").css("display", "block");
        toggleOptions.removeClass("hidden");
        // mapContainer.removeClass("w-100");
        drawMap();
    }
}

function checkToggle(firstLoad = false) {
    let windowWidth = $( window ).width();
    if (windowWidth <= 700) {
        if (firstLoad) {
            toggleOptions.addClass("hidden");
            $("#toggleOptions .icon-expand").css("display", "block");
            $("#toggleOptions .icon-contract").css("display", "none");
        }
        toggleOptions.addClass("full-screen");
    } else {
        toggleOptions.removeClass("full-screen");
    }
}

filterRaces.keyup(function() {
    let filterText = filterRaces.val().toLowerCase();
    console.log(filterText);
    if (filterText === "") {
        // Show all again
        allRaces.show();
    } else {
        allRaces.hide();

        // Find all that match, then set them to be displayed
        allRaces.filter(function () {
            return this.id.toLowerCase().match("wrapper.*" + filterText + ".*");
        }).show();
    }
});

toggleOptions.click(toggleOptionsContainer)