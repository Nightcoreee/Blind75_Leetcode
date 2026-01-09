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


//O(2^n)
//Solution: Recursion
function MaxSubarray_Recursion(nums: number[]): number {
    const dfs = (i: number, flag: boolean): number => {
            if (i === nums.length) return flag ? 0 : -Infinity;
            if (flag) return Math.max(0, nums[i] + dfs(i + 1, true));
            return Math.max(
                dfs(i + 1, false), 
                nums[i] + dfs(i + 1, true));
        };
        return dfs(0, false);
}

console.log(Subarray_Recursion([-2,1,-3,4,-1,2,1,-5,4]));
