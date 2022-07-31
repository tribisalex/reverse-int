module.exports = function reverse (n) {
    if (n < 0) {
        n = n * (-1);
    }
    let array = (""+n).split("").map(Number)
    return array.reverse().join('');
}
