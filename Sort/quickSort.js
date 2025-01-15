const data = [56, 2, 5, 45, 90, 23, 33]
const dataCloned = [
    3,
    1,
    2,
    2,
    3,
    4,
    5,
    5,
    5
  ]



function pivot(arr, start= 0){
    function swap(arr, i, j){
        return [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let pivot = arr[start]
    let swapInx = start

    for(let i = start + 1; i < arr.length ; i++){
        if(pivot > arr[i]){
            swapInx++
            swap(arr, swapInx, i)
        }
    }
    swap(arr, start, swapInx)
    return swapInx
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = pivot(arr, left)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right 
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort(dataCloned))

