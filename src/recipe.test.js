// import {expect} from 'vitest'
function cakes(recipe, available) {
    let cakesCount = []

    for (let ingredient in recipe) {
        if (!available[ingredient]) return 0;
        else {
            cakesCount.push(Math.floor(available[ingredient] / recipe[ingredient]));
        }
    }
    return Math.min(...cakesCount)
}


let recipe1={flour: 500, sugar: 200, eggs: 1};
let available1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

expect(cakes(recipe1, available1)).toBe(2);
