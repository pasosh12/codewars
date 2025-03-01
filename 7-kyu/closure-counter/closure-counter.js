function counter(){
let value = 1
    return function () {
        return value++;
    }
}