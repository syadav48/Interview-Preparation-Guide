const flatten = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr)); // recursion
    } else {
      return acc.concat(curr);
    }
  }, []);
};

console.log(
  flatten([1,2,3,[4,5,6,[7,8,9,[10],11],7,8],4,5])
);

