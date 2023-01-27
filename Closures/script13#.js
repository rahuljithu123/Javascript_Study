//not memoized orcached
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};



console.time("first call");
console.log(clumsyProduct(9467, 7649));
console.timeEnd("first call");

console.time("second call");
console.log(clumsyProduct(9467, 7649));
console.timeEnd("second call");
