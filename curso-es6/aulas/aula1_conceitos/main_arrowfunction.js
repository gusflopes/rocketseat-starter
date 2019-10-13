// Executar "yarn dev" no git antes de começar;

const arr = [1, 3, 4, 5, 6];

// Melhorando a redação, quando só tem 1 linha e 1 parâmetro
const NewArr = arr.map(item => item * 2);

//const NewArr = arr.map(item => console.log(item));

/* Função anônima
const NewArr = arr.map(function(item) {
    return item * 2;
});
*/

console.log(NewArr);