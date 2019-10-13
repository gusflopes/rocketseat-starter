// yarn add axios
/*
import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);

        } catch (err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('gusflopes');
Api.getUserInfo('gusflopes123456');
*/

/* Exercicio 1
    Função delay aciona o .then após 1s*/

    const delay = () => new Promise((resolve, reject) => { 
        setTimeout(() => { resolve('OK') }, 1000);
        });
        
        //Opção com Arrow Function
        
        const umPorSegundo = async () => { 
            console.log(await delay());
            console.log(await delay());
            console.log(await delay());
        }
        umPorSegundo();
        