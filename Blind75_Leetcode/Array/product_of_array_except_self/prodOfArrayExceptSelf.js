//O(n^2) time 
//Solution: Brute Force
var prodOfArrayExceptSelf_BF = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    for (let i=0; i<n; i++) {
        let prod = 1;
        for (let j=0; j<n; j++) {
            if (i !== j) {
                prod *= nums[j];
            }
        }
        result[i] = prod;
    }
    return result;
}

console.log(prodOfArrayExceptSelf_BF([1,2,3,4]));