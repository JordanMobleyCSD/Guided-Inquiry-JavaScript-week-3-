const pizzaSlices = howManyCuts(8); 

function howManyCuts(slicesOfPizza) {
    function slicesPerPerson(totalPeople) {
        return `Everyone will get exactly ${(slicesOfPizza / totalPeople).toFixed(3)} slices of pizza!!! `
    }
    return slicesPerPerson;
}

console.log(pizzaSlices(1))
console.log(pizzaSlices(5))
console.log(pizzaSlices(12))
