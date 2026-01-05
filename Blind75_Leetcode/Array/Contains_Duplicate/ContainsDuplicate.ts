//O(n^2)
//Solution: Brute Force
function ContainsDuplicate_BF(nums: number[]): boolean {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(ContainsDuplicate_BF([1,2,3,1]));