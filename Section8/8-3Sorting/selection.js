function selectionSort(arr) {
    for(let i = 0; i < arr.length -1; i++) {
        //select the number at the index
        let minIndex = i;

        //compare the rest of the array to the selected index
        for(let j = i+1; j < arr.length; j++) {
            //find a number smaller than i
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        //swap the found smaller number with the selected index
        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

module.exports = selectionSort;

console.log(selectionSort([9,58,-62,0,26,49,-15]));