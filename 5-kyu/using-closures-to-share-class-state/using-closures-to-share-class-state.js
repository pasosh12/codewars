var Cat = (function () {
    let totalWeight = 0;   
    let catCount = 0;      
​
    function Cat(name, weight) {
        if (!name || !weight) {
            throw new Error('Both name and weight are required');
        }
​
        this.name = name;
        let _weight = weight;
​
        totalWeight += weight;
        catCount++;
​
        Object.defineProperty(this, 'weight', {
            get: function () {
                return _weight;
            },
            set: function (newWeight) {
                totalWeight -= _weight;    
                _weight = newWeight;
                totalWeight += newWeight;  
            }
        });
    }
​
    Cat.averageWeight = function () {
        return catCount === 0 ? 0 : totalWeight / catCount;
    };
​
    return Cat;
}());