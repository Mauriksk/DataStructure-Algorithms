const x = [2, 34, 54, 47, 3]
const y = [5, 36, 11, 23, 90]

const merginArray = (x: number[], y: number[]): number[] => {
    const data: number[] = []
    let indexX = 0;
    let indexY = 0;
    while (data.length === x.length + y.length) {
        if (x[indexX] < y[indexY]) {
            data.push(x[indexX])
            indexX += 1
        } else {
            data.push(y[indexY])
            indexY += 1
        }
    }
    return data
}

//console.log(merginArray(x, y))

function merginSort(arr: number[]) {
    if (arr.length <= 1) return arr
    let middle = Math.floor(arr.length / 2)
    let left = merginSort(arr.slice(0, middle))
    let right = merginSort(arr.splice(middle))
    return merginArray(left, right)
}

console.log(merginSort([56, 2, 5, 45, 90, 23, 33]))