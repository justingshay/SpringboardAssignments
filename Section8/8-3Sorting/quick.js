/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

//function pivot(){}

/*
quickSort accepts an array, left index, and right index
*/

//function quickSort() {}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*  AT THE POINT OF THIS ASSIGNMENT I WOULD NOT CODE QUICK SORT  */
/*     USING THE STARTING CODE THAT HAS BEEN PROVIDED ABOVE      */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function quickSort(arr) {
    //console.log("Quickly sorting: ", arr);
    //return if length 1 or 0
    if(arr.length < 2) return arr;

    //find array mid point
    const mid = Math.floor(arr.length / 2);
    const smaller = [];
    const larger = [];
    //divide base array to </> than arr[mid]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[mid]) {
            if(arr[i] < arr[mid]) {
                smaller.push(arr[i]);
            } else {
                larger.push(arr[i]);
            }
        }
    }
    //console.log(...quickSort(smaller),arr[mid],...quickSort(larger));
    return [...quickSort(smaller),arr[mid],...quickSort(larger)];
}

module.exports = quickSort;

const sortedArr = quickSort([5,9,0,-3,11,58,26,-19,67]);
console.log(sortedArr);