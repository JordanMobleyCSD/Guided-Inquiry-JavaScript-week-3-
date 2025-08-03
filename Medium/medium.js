const pizzaSlices = howManyCuts(8); 
//Nesting funtion with another function and performing division of the 8 pizza slices by the amount of people eating while leaving 
// a 3 place decimal
function howManyCuts(slicesOfPizza) {
    function slicesPerPerson(totalPeople) {
        return `Everyone will get exactly ${(slicesOfPizza / totalPeople).toFixed(3)} slices of pizza!!! `
    }
    return slicesPerPerson;
}

console.log(pizzaSlices(1))
console.log(pizzaSlices(5))
console.log(pizzaSlices(12))
