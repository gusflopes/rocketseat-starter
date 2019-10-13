// Executar "yarn dev" no git antes de começar;

// REST (...) = pega o resto
// SPREAD = repassar as informações para outra estrutura

// FUNÇÕES COM SPREAD

/* Criar um novo objeto com as mesmas propriedades, trocando apenas 1 propriedade 
*/
const usuario1 = {
    nome: 'Gustavo',
    idade: 33,
    empresa: 'LSCONT'
};

const usuario2 = { ...usuario1, nome: 'Francisco' };
console.log(usuario2);




/* Spread para unir conteúdo
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);
*/

// FUNÇÕES COM REST

/* Ultima função sobre REST
function soma(a, b, ...params) {
    return params;
    //return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 5, 6, 7, 8, 9))
*/


/* Pegar todos os parâmetros
function soma(...params) {
    //return params;
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 5))
*/



/* Com array
const arr = [1, 2, 3, 4];

const [a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);
*/




/* Com dados estruturados
const usuario = {
    nome: 'Gustavo',
    idade: 33,
    empresa: 'LSCONT'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
*/