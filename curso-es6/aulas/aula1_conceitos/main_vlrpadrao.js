// Executar "yarn dev" no git antes de começar;

//valor padrao caso não passe nenhum parâmetro a=3 e b=6

const soma = (a = 3, b = 6) => a + b;

/* Original, mudar para Arrow Function
function soma(a = 3, b = 6) {
    return a + b;
}
*/

console.log(soma(1));
console.log(soma());

