const arr = [1, 3, 4, 5, 8, 9];

// MAP percorre todo array executando a função em cada item
const newArr = arr.map(function(item, index) {
    //return item * 2;
    return item + index;
})

console.log(newArr);

// REDUCE
const sum = arr.reduce(function(total, next){
    return total + next;
})

console.log(sum);

// FILTER

const filter = arr.filter(function(item) {
    // Numero é divisível por 2?
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    // vai retornar 4 pois tem 4 no array... mudar para 2 por exemplo para ver outro resultado.
    return item === 4;
});

console.log(find);