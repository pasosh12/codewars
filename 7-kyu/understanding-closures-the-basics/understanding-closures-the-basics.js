function buildFun(n){
​
  const res = []
​
  for (let i = 0; i< n; i++){
    res.push(()=>{
      return i
    })
  }
  return res
}