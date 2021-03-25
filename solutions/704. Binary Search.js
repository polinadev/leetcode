/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let halfSize = nums.length / 2 - 1;
    
    if (nums.length % 2 !== 0) {
        halfSize += 0.5;
    }
    
    let index = -1;
    if (nums[halfSize] === target) {
        index = halfSize;
    } else if (nums[halfSize] > target) {
        for (let i = halfSize; i >= 0; i--) {
            if (nums[i] === target) {
                index = i;
                break;
            }
        }
    } else {
        for (let i = nums.length - 1; i > halfSize; i--) {
            if (nums[i] === target) {
                index = i;
                break;
            }
        }
    }
    
    return index;
};
