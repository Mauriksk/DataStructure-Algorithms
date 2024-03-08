//? Count the number of equal values in an array

type EqualProps = (value: number[]) => number;

const values = [1, 1, 2, 2, 2, 4, 5, 6, 6, 7, 12]; //* 7

const countEqualValues: EqualProps = (array) => {
  let x = 0;
  let y = 1;

  while (y <= array.length) {
    if (array[x] === array[y]) {
      y++;
      console.log(y)
    } else {
      x++;
      array[x] = array[y];
    }
  }

  return x;
};

console.log(`${countEqualValues(values)}`)
