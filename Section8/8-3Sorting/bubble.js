function bubbleSort(arr) {
    //if array empty or 1 index long return immediately
    if(arr.length < 2) return arr;
    //runs arr.length times
    for(let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length; j++) {
            console.log(arr);
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

module.exports = bubbleSort;

//bubbleSort([5,8,9,-3,4]);