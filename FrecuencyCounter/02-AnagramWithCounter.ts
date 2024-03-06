type Anagram = {
  [prop: string]: number;
};

const validAnadram = (x: string, y: string): boolean => {
  if (x.length !== y.length) {
    return false;
  }

  const lookup: Anagram = {};

  for (let i = 0; i < x.length; i++) {
    let letter = x[i];
    // If letter exist increment it if do not set it to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < y.length; i++) {
    let letter = y[i];

    //If it can not find letter or letter is zero ( magic javascript ) it is not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};
