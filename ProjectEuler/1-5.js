// Project Euler #1
// Multiples of 3 & 5
function multiplesOf3and5(number) {
  let sum = 0;
  for(let i = 0; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}

// Project Euler #2
// Even Fibonacci
function fiboEvenSum(num) {
    var num1=1;
    var num2=2;
    let evenSum = 2;
    var sum;
    for (let i = 0; i < num; i++) 
      {
        sum=num1+num2;
        num1=num2;
        num2=sum;
        if(num2 % 2 == 0)   evenSum += num2;
        if(num2 > num) break;
      }
      return evenSum;
  }

// Project Euler #3
// Largest prime factor
function largestPrimeFactor(num) {
  const arr = [new Set()];
  let prime = 2;

  if(num == 2) {
      arr.push(2);
  }
  while (num > 2){
      if ( num % prime == 0) {
        arr.push(prime);
        num /= prime; 
      } else prime++;
  }
  return arr.pop();
}

// Project Euler #4
// Largest palindrome product
function largestPalindromeProduct(num) {
  const maxArr = [];
  for(let i = 1; i <= num; i++){
      maxArr.push(1);
  }
  const digitMax = maxArr.join('') * 9;
  const digitMin = (digitMax + 1) / 10;

  let largest = -1;

  for(let j = digitMax; j >= digitMin; j--){
      for(let k = digitMax; k >= digitMin; k--){
          let num = j*k;
          let numReverse = [...String(num)].reverse().join("");

          if(num == numReverse) {
              largest = Math.max(num, largest);
              break;
          }
      }
  }
  return largest;
}

// Project Euler #5
// Smallest Multiple GCD LSM
function smallestMult(num) {
  let maxLCM = 1;
  for ( let i = 2; i <= num; i++){
    maxLCM = lcm(maxLCM, i);
  }

  return maxLCM;
}

const lcm = (a, b) => (a * b) / gcd(a, b);


const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);