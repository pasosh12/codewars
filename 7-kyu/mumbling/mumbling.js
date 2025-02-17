function accum(s) {
   let chars = s.toLowerCase()
            chars = chars.split('');
            acc = ''
            for (let i = 0; i < chars.length; i++) {
                acc += chars[i].toUpperCase()
                // let i=0
                // while i<index
                for (let j = 0; j < i; j++) {
​
                    // console.log(chars[i])
                    acc += chars[i]
                }
                if (i !== chars.length - 1) acc += '-'
            }
            return acc
}