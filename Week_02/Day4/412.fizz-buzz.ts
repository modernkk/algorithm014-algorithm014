/*
 * @lc app=leetcode.cn id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    let result: string[] = [];
    for (let i = 1; i <= n; i++) {
        let isFizz = i % 3 === 0;
        let isBuzz = i % 5 === 0;
        let val = '';
        if (isFizz) {
            val += 'Fizz';
        }
        if (isBuzz) {
            val += 'Buzz';
        }
        if (val === '') {
            val = `${i}`;
        }
        result.push(val);
    }
    return result;
};
// @lc code=end

