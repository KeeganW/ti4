/**
 * Calculate offsets of the tiles in relation to Mecatol Rex (the center tile). This information
 * is stored in an array of two value arrays. The two value arrays reperesent the margin left
 * and margin top to offset the tile (based on size of of tiles).
 * @param width The width (in pixels) of a single tile
 * @param height The height (in pixels) of a single tile
 * @returns {(number[]|(number)[])[]} an array of two value arrays.
 */
export const calculateOffsets = (width, height) => {
    let leftWidth = -width
    let topHeight = -height
    let halfWidth = Math.ceil(leftWidth * 0.5)
    let halfHeight = Math.ceil(topHeight * 0.5)
    let treQuarWidth = Math.ceil(leftWidth * 0.75)

    return [
        [halfWidth, halfHeight],  // Mecatol Rex
        // Inner ring
        [halfWidth, halfHeight + topHeight],
        [halfWidth - treQuarWidth, halfHeight + halfHeight],
        [halfWidth - treQuarWidth, 0],
        [halfWidth, halfHeight - topHeight],
        [halfWidth + treQuarWidth, 0],
        [halfWidth + treQuarWidth, halfHeight + halfHeight],
        // Middle ring
        [halfWidth, halfHeight + topHeight + topHeight],
        [halfWidth - treQuarWidth, halfHeight + topHeight + halfHeight],
        [halfWidth - leftWidth - halfWidth, halfHeight + topHeight],
        [halfWidth - leftWidth - halfWidth, halfHeight],
        [halfWidth - leftWidth - halfWidth, halfHeight - topHeight],
        [halfWidth - treQuarWidth, halfHeight - topHeight - halfHeight],
        [halfWidth, halfHeight - topHeight - topHeight],
        [halfWidth + treQuarWidth, halfHeight - topHeight - halfHeight],
        [halfWidth + leftWidth + halfWidth, halfHeight - topHeight],
        [halfWidth + leftWidth + halfWidth, halfHeight],
        [halfWidth + leftWidth + halfWidth, halfHeight + topHeight],
        [halfWidth + treQuarWidth, halfHeight + topHeight + halfHeight],
        // Outer Ring
        [halfWidth, halfHeight + topHeight + topHeight + topHeight],
        [halfWidth - treQuarWidth, halfHeight + topHeight + topHeight + halfHeight],
        [halfWidth - leftWidth - halfWidth, halfHeight + topHeight + topHeight],
        [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight + topHeight + halfHeight],
        [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight + halfHeight],
        [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight - halfHeight],
        [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight - topHeight - halfHeight],
        [halfWidth - leftWidth - halfWidth, halfHeight - topHeight - topHeight],
        [halfWidth - treQuarWidth, halfHeight - topHeight - topHeight - halfHeight],
        [halfWidth, halfHeight - topHeight - topHeight - topHeight],
        [halfWidth + treQuarWidth, halfHeight - topHeight - topHeight - halfHeight],
        [halfWidth + leftWidth + halfWidth, halfHeight - topHeight - topHeight],
        [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight - topHeight - halfHeight],
        [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight - halfHeight],
        [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight + halfHeight],
        [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight + topHeight + halfHeight],
        [halfWidth + leftWidth + halfWidth, halfHeight + topHeight + topHeight],
        [halfWidth + treQuarWidth, halfHeight + topHeight + topHeight + halfHeight],
        // Extended Ring
        [halfWidth, halfHeight + topHeight + topHeight + topHeight + topHeight],
        [halfWidth - treQuarWidth, halfHeight + topHeight + topHeight + topHeight + halfHeight],
        [halfWidth - leftWidth - halfWidth, halfHeight + topHeight + topHeight + topHeight],
        [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight + topHeight + topHeight + halfHeight],
        [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight + topHeight + topHeight],
        [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight + topHeight],
        [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight],
        [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight - topHeight],
        [halfWidth - leftWidth - leftWidth - leftWidth, halfHeight - topHeight - topHeight],
        [halfWidth - treQuarWidth - leftWidth - halfWidth, halfHeight - topHeight - topHeight - halfHeight],
        [halfWidth - leftWidth - halfWidth, halfHeight - topHeight - topHeight - topHeight],
        [halfWidth - treQuarWidth, halfHeight - topHeight - topHeight - topHeight - halfHeight],
        [halfWidth, halfHeight - topHeight - topHeight - topHeight - topHeight],
        [halfWidth + treQuarWidth, halfHeight - topHeight - topHeight - topHeight - halfHeight],
        [halfWidth + leftWidth + halfWidth, halfHeight - topHeight - topHeight - topHeight],
        [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight - topHeight - topHeight - halfHeight],
        [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight - topHeight - topHeight],
        [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight - topHeight],
        [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight],
        [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight + topHeight],
        [halfWidth + leftWidth + leftWidth + leftWidth, halfHeight + topHeight + topHeight],
        [halfWidth + treQuarWidth + leftWidth + halfWidth, halfHeight + topHeight + topHeight + halfHeight],
        [halfWidth + leftWidth + halfWidth, halfHeight + topHeight + topHeight + topHeight],
        [halfWidth + treQuarWidth, halfHeight + topHeight + topHeight + topHeight + halfHeight],
    ]
}
