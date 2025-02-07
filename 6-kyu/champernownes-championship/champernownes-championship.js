const getDigit = n => {
  let len = 1;
  let count = 9;
  let start = 1;
​
  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }
​
  const number = (start + Math.floor(n/len)).toString();
  
  return +number[n % len];
}
​
const champernowneDigit = n => Number.isInteger(n) ? getDigit(n - 2) : NaN;