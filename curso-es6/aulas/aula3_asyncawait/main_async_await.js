// Async precisa instalar pelo terminal
const minhaPromise = () => new Promise((resolve, reject) => { 
    setTimeout(() => { resolve('OK') }, 2000);
});

//Opção com Arrow Function

const executaPromise = async () => { 
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();


/* Opção 02
async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();
*/

/* Opção 03
async function executaPromise() {
    const response = await minhaPromise();
    console.log(response);
}
executaPromise();
*/


/* Objetivo é substituir  isso aqui (then/catch)
minhaPromise()
    .then(response => { console.log(response); })
    .catch(err => { console.log('Erro')}); 
*/