function high(x) {
    const words = x.split(' ')
    console.log(words)
    const wordsSummary = [...words].map((word) => {
​
        let wordSummary = 0
        for (let letter in word) {
            wordSummary += Number(word[letter].charCodeAt() - 96)
        }
        return wordSummary
​
    })
    const sumResult = Math.max.apply(null, wordsSummary)
    const position = wordsSummary.indexOf(sumResult)
​
    return words[position]
}