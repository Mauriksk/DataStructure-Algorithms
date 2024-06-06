const list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findMiddle(x: number, y: number) {
  return Math.round((x - y) / 2);
}

const binarySearch = (arr: number[], value: number) => {
  let leftValue = 0;
  let rightValue = arr.length - 1;

  function helper(arr: number[], value: number) {
    if (leftValue === value) return leftValue;
    if (rightValue === value) return rightValue;

    if (findMiddle(rightValue, leftValue) === value) {
      return value;
    } else if (findMiddle(rightValue, leftValue) > value) {
        return helper()
    }
  }

  return rightValue;
};

console.log(binarySearch(list, 8));
