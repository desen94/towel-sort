module.exports = function towelSort(matrix) {
    return matrix?.map((block, index) => index % 2 !== 0 ? block.reverse() : block).flat() || []
}
