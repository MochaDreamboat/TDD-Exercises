let analyzeArray = (arr) => {

    const average = getAverage(arr);
    const min = getMin(arr);
    const max = getMax(arr);
    const length = arr.length();

    const getAverage = arr => {
        let sum = arr.reduce((a,b) => a + b);
        let length = arr.length()
        return (sum / length)
    };

    const getMin = arr => {
        let minimum = arr.reduce((a,b) => a < b ? a : b)
        return minimum;
    };

    const getMax = arr => {
        let maximum = arr.reduce((a,b) => a > b ? a : b)
        return maximum;
    };

    return {average, min, max, length}
};

module.exports = analyzeArray;