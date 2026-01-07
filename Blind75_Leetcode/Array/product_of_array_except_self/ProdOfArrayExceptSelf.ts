//O(n^2) time
//Solution: Brute Force
function ProdOfArrayExceptSelf_BF(nums: number[]): number[] {
    const n = nums.length;
    const res = new Array(n);
    for (let i=0; i<n; i++) {
        let prod = 1;
        for (let j=0; j<n; j++) {
            if (i !== j) {
                prod *= nums[j];
            }
        }
        res[i] = prod;
    }
    return res;
}

console.log(ProdOfArrayExceptSelf_BF([1,2,3,4]));