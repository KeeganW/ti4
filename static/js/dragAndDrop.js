// Drag and drop related functions, modified from https://www.w3schools.com/html/html5_draganddrop.asp
function allowDrop(ev) {
    ev.preventDefault();
}
function dragEnter(ev){
    let targetSelector = $("#" + ev.target.id);
    let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);
    targetSelector.addClass("tile-target")
    targetUnderlay.addClass("underlay-target")
}
function dragLeave(ev){
    let targetSelector = $("#" + ev.target.id);
    let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);
    targetSelector.removeClass("tile-target")
    targetUnderlay.removeClass("underlay-target")
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
    let targetUnderlay = $("#underlay-" + ev.target.id.split("-")[1]);

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
    // TODO have this change url as well (put into function)

    // Clear the target classes
    targetSelector.removeClass("tile-target")
    targetUnderlay.removeClass("underlay-target")
}