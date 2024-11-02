function radixSort(arrNums) {
    let maxDigitNum = maxNumDigits(arrNums);

    for(let i = 0; i < maxDigitNum; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for(let j = 0; j < arrNums.length; j++) {
            let digit = getDigit(arrNums[j], i);

            digitBuckets[digit].push(arrNums[j]);
        }
        //reorder after each loop
        arrNums = [].concat(...digitBuckets);
    }
    return arrNums;
}

//return the digit of the number in the specified place
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//return how many digits a number is
function howManyDigits(num) {
    if(num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//return number with most digits
function maxNumDigits(arrNums) {
    let mostDigits = 0;

    for(let i = 0; i < arrNums.length; i++) {
        mostDigits = Math.max(mostDigits, howManyDigits(arrNums[i]));
    }
    return mostDigits;
}

module.exports = radixSort;

console.log(radixSort([0,53,27,82,7,17]));