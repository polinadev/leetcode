/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let numsSize = nums.length;
    const initialValue = nums[0];
    if (numsSize === 1) {
        return initialValue;
    }
    let totalSum = initialValue;
    let maxSum = initialValue;
    for (let index = 1; index < numsSize; index ++) {
        const currValue = nums[index];
        totalSum = currValue > totalSum + currValue ? currValue : totalSum + currValue;
        maxSum = maxSum < totalSum ? totalSum : maxSum;
    }
    return maxSum;
};
