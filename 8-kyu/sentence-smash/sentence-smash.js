function smash (words) {
   return `${words.reduce((acc,w)=>acc+=w+' ','').trim()}`
};