function descendingOrder(num){
  
  if (num > 9) {
        let arr = []
        num = num.toString()
        for (let l of num) {
            arr.push(Number(l))
        }
        arr.sort(function (a, b) {
            return b - a;
        });
        return Number(arr.join(''))
    } else {
        return num
    }
}