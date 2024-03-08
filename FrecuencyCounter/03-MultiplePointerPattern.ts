//? Return the first pair of number who sum 0 together.

type SumType = (array: number[]) => number[] | undefined;

//! Bad solution
const sumNumberNaiveSolution: SumType = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
};

//* Best solution
const sumZero: SumType = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }
};

