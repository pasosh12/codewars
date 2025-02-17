function accum(s) {
   let chars = s.toLowerCase()
            chars = chars.split('');
            acc = ''
            for (let i = 0; i < chars.length; i++) {
                acc += chars[i].toUpperCase()
                for (let j = 0; j < i; j++) {
                    acc += chars[i]
                }
                if (i !== chars.length - 1) acc += '-'
            }
            return acc
}
