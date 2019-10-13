// Executar "yarn dev" no git antes de começar;
// yarn add webpack webpack-cli -D
// webpack.config.js foi criado e algumas alterações no package.json

// Usando o 'export default' não precisa colocar entre chaves, podendo renomear sem usar o 'as'
// Contudo, somente uma função pode ser exportada usando 'export default' por arquivo.


// Outra forma possivel:
import * as funcoes from './funcoes';

console.log(funcoes.soma(1,2));
console.log(funcoes.sub(4,2));
console.log(funcoes.mult(4,3));





//import { soma, sub } from './funcoes';
//import { soma as somaFunction, sub } from './funcoes';

/* 
import somaFunction from './soma';

console.log(somaFunction(1,2));

*/

//console.log(soma(1,2));

//console.log(sub(4,2));