class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    // Para adicionar
    constructor() {
        //Super é para importar da outra classe, no caso, classe List
        super();

        this.usuario = "Gustavo";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}


MinhaLista.mostraUsuario();


/* PRIMEIRO

class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

//Segunda Versão
class TodoList extends List {
    // Para adicionar
    constructor() {
        //Super é para importar da outra classe, no caso, classe List
        super();

        this.usuario = "Gustavo";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}


MinhaLista.mostraUsuario();
*/


/* static só usa internamente

class Matematica {
    
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,3));
*/
