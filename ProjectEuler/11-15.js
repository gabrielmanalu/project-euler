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
function largeSum(arr) {
    let result = Number(arr.map(str => Number(str)).reduce((a,b) => a + b, 0)
                .toString().substring(0,11).replace('.', ''));
    return result;
  }
  