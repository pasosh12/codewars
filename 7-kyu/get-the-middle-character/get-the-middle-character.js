function getMiddle(s) {
     let len = s.length
            let isEven = s.length%2 ===0
            return isEven ? s[len/2-1] + s[len/2] : s[~~(len/2)]
​
    return '';
}