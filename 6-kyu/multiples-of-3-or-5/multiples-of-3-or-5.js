function solution(number) {
    let step = 3
    let sum = 0
    while (step < number) {
        sum +=  (step % 3 === 0) || (step % 5 === 0)  ? step : 0
            step++
    }
    return sum
​
}