const collectOddValuesPureRecursion = (arr: number[]) => {
    let newArr: number[] = []

    if(arr.length === 0){
        return newArr
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)))

    return newArr
}

//! Rememeber to use slice, spread or concat to make copies of the array
//! With strings i can use also slice, substr, or substring
//! with objects use Object.assign or the spread operator.