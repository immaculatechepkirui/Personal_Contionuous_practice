// Given an integer array arr[]. You need to find the maximum 
// sum of a subarray.

const maxSubArray = (arr) =>{
    let sum = 0;
    let maxSum = 0;
    for(i = 0; i < arr.length; i++){
            sum = sum + arr[i];
            maxSum = Math.max(sum, maxSum);
            if(sum < 0){
                sum = 0;
            }
        }
        if(maxSum < 0){
            maxSum = 0;
        }
        return maxSum;       
    
};
console.log(maxSubArray([-2, -4]));
console.log(maxSubArray([2, 3, -8, 7, -1, 2, 3]));
console.log(maxSubArray([5, 4, 1, 7, 8]));






// Method Two

function findMaxSumSubArray(arr) {
        let sum = 0;
        let maxSum = 0;
        
        arr.forEach(num => {
            sum += num;
            maxSum = Math.max(sum, maxSum);
            
            if(sum < 0){
                sum = 0;
            }
        if(maxSum < 0){
            maxSum = 0;
        }
        })
        return maxSum;
}

console.log(findMaxSumSubArray([-2, -4]));
console.log(findMaxSumSubArray([2, 3, -8, 7, -1, 2, 3]));
console.log(findMaxSumSubArray([5, 4, 1, 7, 8]));
