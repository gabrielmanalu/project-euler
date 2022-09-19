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


// Project Euler #7
// nth Prime
const findPrime = num => {
  let i, primes = [2, 3], n = 5;
  const isPrime = n => {
     let i = 1, p = primes[i],
     limit = Math.ceil(Math.sqrt(n));
     while (p <= limit) {
        if (n % p === 0) {
           return false;
        }
        i += 1;
        p = primes[i];
     }
     return true;
  }
  for (i = 2; i <= num; i += 1) {
     while (!isPrime(n)) {
        n += 2;
     }
     primes.push(n);
     n += 2;
  };
  return primes[num - 1];
}