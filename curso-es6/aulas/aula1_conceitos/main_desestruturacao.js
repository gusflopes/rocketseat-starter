// Executar "yarn dev" no git antes de começar;

//Desestruturação de Objetos

const usuario = {
    nome: 'Gustavo',
    idade: 33,
    endereco: {
        cidade: 'Campo Grande',
        estado: 'MS',
    },
};

/* ### SEGUNDA PARTE
*/

function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome, idade, cidade);
}

mostraNome(usuario);



/* ### PRIMEIRA PARTE DA AULA 
//A melhorar
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


console.log(usuario);

/* A melhorar
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/

