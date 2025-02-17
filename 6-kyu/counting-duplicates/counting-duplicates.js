function duplicateCount(text){
  let uniqueChars = 0
  let chars = text.toLowerCase()
            chars = chars.split('');
​
    
    let unique = chars.reduce((acc, symbol)=>{
        acc[symbol] = acc[symbol] ? acc[symbol] + 1 : 1
         return acc
    },{})
    
    for (let [elem, value]  of Object.entries(unique)){
        if(value>=2) uniqueChars++
    }
    return uniqueChars
}