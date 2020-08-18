/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i++] = temp;
        }
    }
};