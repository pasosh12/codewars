function perimeter(n) {
    let sequence = [1,1,2];
    
    if (n === 0) return 4
    for (let i = 2; i < n+1; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
     const sum = sequence.reduce((acc, el) => acc + el*4, 0);
    return sum;
}