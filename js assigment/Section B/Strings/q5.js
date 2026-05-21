function checknum(str) {
    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (freq[char]) {      // i = 0  char = "b"  1st time repeat // i = 1 char = "a"   1st time repeat // i=2 char = "n" 1st time repaet // i = 3 char ="a"   2nd time reapet  freq[char] = 1+1 = 2
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    return freq;
}

console.log(checknum("banana"));