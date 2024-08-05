function swap(arr: [], x: number, y: number) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const swapES6 = (arr: [], x: number, y: number) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
};
