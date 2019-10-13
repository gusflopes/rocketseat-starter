

function teste(x) {
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x, y);
    }
}
// A let y =2 está no escolo da funcion; nao da para usar fora da funciton
// Ao definir let y=4 dentro do escopo if, ele vai usar 4 em vez do 2

teste(10);
