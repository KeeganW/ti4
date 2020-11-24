// Drag and drop related functions, modified from https://www.w3schools.com/html/html5_draganddrop.asp
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    // Get the associated ids
    let fromId = ev.dataTransfer.getData("text");
    let targetId = ev.target.id;

    let targetSelector = $("#" + targetId);
    let fromSelector = $("#" + fromId);

    // Temporarily store the target's source
    let targetSource = targetSelector.attr('src');

    // Swap the sources
    targetSelector.attr('src', fromSelector.attr('src'));
    fromSelector.attr('src', targetSource);

    // Update the tile string
    let tiles = validateTiles(tileStringInput.val())

    // Swap the two tiles in the tile string
    let firstIndex = targetId.split("-")[1]
    let secondIndex = fromId.split("-")[1]
    let temp = tiles[firstIndex];
    tiles[firstIndex] = tiles[secondIndex];
    tiles[secondIndex] = temp;

    // Update the tile string
    tileStringInput.text(JSON.stringify(tiles))
}