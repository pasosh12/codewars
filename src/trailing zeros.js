function zeros (n) {
    let k=1
    let endZeros=0
    while (~~(n/5**k) > 0){
        endZeros += ~~(n/5**k)
        k++
    }
    return endZeros
}
console.log(zeros(6)) //1
console.log(zeros(30)) //7
console.log(zeros(100)) //24