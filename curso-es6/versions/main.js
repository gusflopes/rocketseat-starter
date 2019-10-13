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
  /* com o 'extends List' eu joguei tudo isso para a classe List
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('New todo');
    console.log(this.todos);
  }
  */
  constructor() {
    super(); //Chamei o constructor da classe pai
    this.user = 'Gustavo';
  }

  showUser() {
    console.log(this.user);
  }

}

const MyList =  new TodoList();

document.getElementById('newtodo').onclick = function() {
  MyList.add('New  todo');
}

MyList.showUser();