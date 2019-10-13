/* Ex. 1.1-A
import Usuario from './functions';
Usuario.info();
*/

/* Exercicio 1.1
    ## nao preciso usar o nome da function 'export default', apenas dar o novo nome
    
import ClasseUsuario from './functions';

ClasseUsuario.info();
*/

/* Exercicio 2.2
    ## Apenas importar uma variável

    import { idade } from './functions';
console.log(idade);

*/

/* Exercício 2.3
    ## Importar a classe e a variável
*/

//import * as functions from './functions';
import User, { idade as IdadeUsuario } from './functions';

console.log(IdadeUsuario);
User.info();

//console.log(ClasseUsuario.idade);
