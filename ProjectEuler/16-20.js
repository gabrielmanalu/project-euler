// Project Euler #16
// Power digit sum
function powerDigitSum(exponent) {
  const number = BigInt(Math.pow(2, exponent));
  const sum = number.toString()
              .split('')
              .map(Number)
              .reduce(function (a, b) {
               return a + b; }
               , 0);
  return sum;
}
