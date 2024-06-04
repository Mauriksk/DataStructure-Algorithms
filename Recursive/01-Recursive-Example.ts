

const sumRange = (num: number): number => {
    if(num === 1) return 1

    return num + sumRange(num - 1)
}

console.log(sumRange(3)) // Result 6
console.log(sumRange(4)) // Result 10