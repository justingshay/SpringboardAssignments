function merge(arr1, arr2) {
    console.log("Merging " + arr1 + " and " + arr2);
    //empty to merge sorted arrays
    const resultsArr = [];
    let i = 0, j = 0;
    //compare and push smaller value until 1 array exhausted
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            resultsArr.push(arr1[i]);
            i++;
        } else {
            resultsArr.push(arr2[j]);
            j++;
        }
    }
    //merge non-exhausted array to results
    while(i < arr1.length) {
        resultsArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        resultsArr.push(arr2[j]);
        j++;
    }
    console.log("Merged array: ", resultsArr);
    return resultsArr;
}

function mergeSort(arr) {
    if(arr.length < 2) return arr;
    const midPoint = Math.floor(arr.length / 2);
    //recursively break down arrays to smaller size to order
    const leftHalf = mergeSort(arr.slice(0, midPoint));
    const rightHalf = mergeSort(arr.slice(midPoint));

    return merge(leftHalf, rightHalf);
}

module.exports = { merge, mergeSort};

//merge([1,3,5,7],[2,4,6,7,8]);
mergeSort([99,1,15,-18,7,29,3,83,0,-64,55]);