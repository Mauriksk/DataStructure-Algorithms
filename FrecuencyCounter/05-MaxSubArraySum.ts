//? Take an array and a number, sum the consecutive positions of this array
//? that the number indicate and return the higher combination
const arrayToCheck: number[] = [2, 6, 9, 2, 1, 8, 5, 6, 3];

const maxSubArraySumNaive = (list: number[], positions: number): number => {
  let max = -Infinity;

  for (let i = 0; i < list.length - positions; i++) {
    let temp = 0;
    for (let j = 0; j < positions; j++) {
      temp += list[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
};

console.log(maxSubArraySumNaive(arrayToCheck, 3));

const maxSubArraySum = (list: number[], positions: number): number | string => {
  let max = 0;
  let tempNum = 0;
  if (positions > list.length) return "Not valid";
  for (let i = 0; i < positions; i++) {
    max += list[i];
  }
  tempNum = max;

  for (let j = positions; j < list.length; j++) {
    tempNum = tempNum - list[j - positions] + list[j];
    max = Math.max(max, tempNum);
  }

  return max;
};

console.log(maxSubArraySum(arrayToCheck, 3));
