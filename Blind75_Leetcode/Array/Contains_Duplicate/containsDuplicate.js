//O(n^2) time complexity
//Solution: Brute Force
var containsDuplicate_BF = function(nums) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate_BF([1,2,3,1])); 

