function past(h, m, s){
  let ms=s*1000
  let mm=m*60000
  let hs= h*3600000
  
  return hs+mm+ms
}