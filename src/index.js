module.exports = function toReadable(number) {
    let length = number.toString().length;
    let numberX = Number(number.toString().slice(-1));
    let numberXX = Number(number.toString().slice(-2));
    let firstArray = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    let secondArray = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return "zero";
    } else if (number < 20) {
        return firstArray[number];
    } else if (length === 2) {
        return (
            secondArray[Number(number.toString().slice(-2, -1))] +
            " " +
            firstArray[Number(number.toString().slice(-1))]
        ).trim();
    } else if (length === 3 && numberXX < 20) {
        return (firstArray[Number(number.toString().slice(-3, -2))] +
        " hundred " + firstArray[numberXX]).trim();
    }else if (length === 3){
        let belowHundred = (
            secondArray[Number(number.toString().slice(-2, -1))] +
            " " +
            firstArray[Number(number.toString().slice(-1))]
        ).trim();
        return (
            firstArray[Number(number.toString().slice(-3, -2))] +
            " hundred " +
            belowHundred
        ).trim();
    } else {
        return "Invalid input data";
    }
};