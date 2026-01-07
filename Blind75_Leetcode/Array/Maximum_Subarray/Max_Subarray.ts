//O(n^2) 
//Solution: Brute Force
function MaxSubArray_BF(nums: number[]): number {
    let n = nums.length;
    let res = nums[0];
    for (let i=0; i<n; i++) {
        let curNum = 0;
        for (let j=i; j<n; j++) {
            curNum += nums[j];
            res = Math.max(res, curNum);
        }
    }
    return res;
}

console.log(MaxSubArray_BF([-2,1,-3,4,-1,2,1,-5,4]));
