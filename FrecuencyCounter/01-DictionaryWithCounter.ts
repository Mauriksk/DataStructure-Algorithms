// We need a function that compares to arrays and check every value of the first array has their square root in the second array.

type SameType = (x: number[], y: number[]) => boolean;
type Counter = {
  [prop: string]: number;
};

const same: SameType = (x, y) => {
  if (x.length !== y.length) {
    return false;
  }

  let counterX: Counter = {};
  let counterY: Counter = {};

  for (let val of x) {
    counterX[val] = (counterX[val] || 0) + 1;
  }

  for (let val of y) {
    counterY[val] = (counterY[val] || 0) + 1;
  }

  for (let key in counterX) {
    if (!((+key) ** 2 in counterY)) {
      return false;
    }
    if(counterY[(+key) ** 2] !== counterX[key]){
      false
    }
  }

  return true;
};
