// Project Euler #11
// Largest product in a grid
function largestGridProduct(arr) {
    let max = 0;
    let temp = 0;
  
    const maxCheck = (n) => n > max ? max = n : max = max;
  
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            const limit = arr[i].length - 3;
  
            if (j < limit) {
                temp = arr[i][j] * arr[i][j+1] * arr[i][j+2] * arr[i][j+3];
                maxCheck(temp);
            }
            if (i < limit) {
                temp = arr[i][j] * arr[i+1][j] * arr[i+2][j] + arr[i+3][j];
                maxCheck(temp);
            }
            if (j < limit && i < limit) {
                temp = arr[i][j] * arr[i+1][j+1] * arr[i+2][j+2] * arr[i+3][j+3];
                maxCheck(temp);
            }
            if (j > 3 && i < limit) { 
                temp = arr[i][j] * arr[i+1][j-1] * arr[i+2][j-2] * arr[i+3][j-3];
                console.log(i);
                console.log(i);
                maxCheck(temp);
            }
        }   
    }
    return max;
  }
  

// Project Euler #12
// Highly divisible tringular number
function divisibleTriangleNumber(num) {
    var i = 1;
    var triangle = i;
    while(divisorCnt(triangle) < num){
        i++;
        triangle += i;
  }
  return triangle;
  }
  
  function divisorCnt(n){
    let divisor = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
    if (n % i === 0) divisor += 2;
    if (n % Math.sqrt(n) === 0) divisor += 1;
    return divisor;
  }



// Project Euler #13
// Large Sum (first 10 digits)
function largeSum(arr) {
    let result = Number(arr.map(str => Number(str)).reduce((a,b) => a + b, 0)
                .toString().substring(0,11).replace('.', ''));
    return result;
  }
  
function largeSum(arr) {
    let result = Number(arr.map(str => Number(str)).reduce((a,b) => a + b, 0)
                .toString().substring(0,11).replace('.', ''));
    return result;
  }


// Project Euler #14
// Longest Collatz sequence
function longestCollatzSequence(limit) {
    const number = [];
    for(let i = 2; i <= limit; i++){
        let collatz = 1;
        let j = i;
        while (j != 1) {
            if(j % 2 == 0){
                j /= 2;
                collatz++;          
            } else {
                j = 3 * j + 1;
                collatz++;
            }
        }
        number.push(collatz);
    }
  
    var largest= 0;
    for (let i=0; i<number.length; i++){
        if (number[i]>largest) {
            largest=number[i];
        }
    }
    
    const result  = number.indexOf(largest);
    return result + 2;
  }
  

// Project Euler #15
// Lattice paths
function latticePaths(gridSize) {
    let n = gridSize;
    let array = [];
  
    for (let i = n; i >= 0; i--) {
        let row = [];
        row[n] = 1;
        array.push(row);
    }
  
    for (let i = n; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === n) {
                array[i][j] = 1;
            } else {
                array[i][j] = array[i][j + 1] + array[i + 1][j]
            }
        }
    }
    return array[0][0];
}