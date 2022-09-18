// Project Euler #6
// Sum square difference
function sumSquareDifference(num) {

  const number = [];
  for(let i = 1; i <= num; i++) number.push(i);

  const sum = number.reduce((a, b) => a + b, 0);
  const sumSquare = Math.pow(sum, 2);
  const squareSumArr = [];
  for(let i = 1; i <= num; i++) squareSumArr.push(Math.pow(i, 2));
  const squareSum = squareSumArr.reduce((a, b) => a + b, 0);

  let result = sumSquare - squareSum;
  console.log(result);
  return result;
}

function sumSquareDifference(num) {

  const sumOfN = (num*(num+1) / 2);
  const sumOfNSquare = (num*(num + 1)*(2*num+1))/6
  let result =  sumOfN*sumOfN - sumOfNSquare ;
  console.log(result);
  return result;
}
