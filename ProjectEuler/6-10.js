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

// Project Euler #8
// Largest product in a series
function largestProductinaSeries(n) {

   let thousandDigits = [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0];
   const digit = thousandDigits.length;
 
   let largest = -1;
   for(let i = 0; i < digit - n; i++){
       const digitProduct = thousandDigits.slice(i, (i+n)).reduce((a, b) => a * b, 1);
       largest = Math.max(digitProduct, largest);
   }
   return largest;
 }


// Project Euler #9
// Sepcial Pythagorean triplet
function specialPythagoreanTriplet(n) {
   let sumOfabc = n;
   var a, c;
 
   for (var b = 1; b < n; b++){
       a = ((n * n / 2) - (n * b)) / (n - b);
       if(Math.floor(a) === a) {
           c = n - a - b;
           break;
       }
   }
   
 
   return a * b * c;
 }


 // Project Euler #10
// Summation of Primes
function primeSummation(num) {

   let result = 0;
   for(let i = 2; i < num; i++){
       var isPrime = true;
       for(let j = 2; j < i; j++){
           if(i % j == 0 && i !== j)  isPrime = false;
       }
       if(isPrime) result += i;
   }
   return result;
 }
 

 function primeSummation(num) {

   let result = 0;
   const isPrime = num => {
       for(let i = 2; i <= Math.sqrt(num); i++) { 
           if(num % i == 0) return false;
        }
        return true;
   }
 
   for(let i = 2; i < num; i++){
       if (isPrime(i)) result +=i;
   }
   return result;
 }
 