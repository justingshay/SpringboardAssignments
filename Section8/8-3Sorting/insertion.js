function insertionSort(arr) {
    //if array empty or 1 index long return immediately
    if(arr.length < 2) return arr;
    console.log(arr);
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] >= currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

module.exports = insertionSort;

//insertionSort([64,20,-1,8,3,0,99,15]);