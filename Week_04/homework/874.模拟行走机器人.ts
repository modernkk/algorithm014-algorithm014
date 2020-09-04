/*
 * @lc app=leetcode.cn id=874 lang=typescript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
function robotSim(commands: number[], obstacles: number[][]): number {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let di = 0;
    let endX = 0;
    let endY = 0;
    let ans = 0;
    let hashObstacles = new Map();
    for (let i = 0; i < obstacles.length; i++) {
        let obstacle = obstacles[i];
        hashObstacles.set(`${obstacle[0]}-${obstacle[1]}`, true);
    }
    for (let j = 0; j < commands.length; j++) {
        let c = commands[j];
        if (c === -1) {
            di = (di + 1) % 4;
        } else if (c === -2) {
            di = (di + 3) % 4;
        } else {
            for (let step = 1; step <= c; step++) {
                let nextX = endX + dx[di];
                let nextY = endY + dy[di];
                if (hashObstacles.has(`${nextX}-${nextY}`)) {
                    break;
                }
                endX = nextX;
                endY = nextY;
                ans = Math.max(ans, endX * endX + endY * endY);
            }
        }
    }
    return ans;
};
// @lc code=end

