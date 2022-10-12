// Project Euler #11
// Largest product in a grid
function largestGridProduct(arr) {
    let max = 0;
    let temp = 0;
  
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
  