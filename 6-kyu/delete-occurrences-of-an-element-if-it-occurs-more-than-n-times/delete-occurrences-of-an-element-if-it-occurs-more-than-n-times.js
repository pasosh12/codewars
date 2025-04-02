function deleteNth(arr, n) { 
    let obj = {}
    let arr2=[]
    for(let i=0; i<arr.length;i++){
        
        if (!obj[arr[i]]) {
            obj[arr[i]] = 0;
        }
        if(obj[arr[i]] < n){
            arr2.push(arr[i])
            obj[arr[i]] += 1
        }
    }
    
    return arr2
}