function replaceSpace(s: string): string {
    let result: string[] = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === ' ') {
            result.push('%20');
        } else {
            result.push(c);
        }
    }
    return result.join('')
};