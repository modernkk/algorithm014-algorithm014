function maxSlidingWindow(nums: number[], k: number): number[] {
    let len = nums.length;
    if (len < 1) {
        return []
    }
    let result: number[] = [];
    for (let i = 0; i < len - k + 1; i++) {
        let max = nums[i];
        for (let j = i; j < i + k; j++ ) {
            let temp = nums[j];
            max = Math.max(temp, max);
        }
        result.push(max);
    }
    return result;
};
