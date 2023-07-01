# TestMobile

Bài giải algorithm

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);
  console.log( "Our minimum sum is "+ minSum, "and","Our minimum sum is "+ maxSum);
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr); 

