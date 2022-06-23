//Módulo: Uso de Editor de Código

//Retorna hora e mensagem
//Math.floor(): retorna números inteiros no random com limite de 24
//Math.random(): retorna números aleatórios, sem o Math.floor, será retornado númros aleatórios entre 0 e 1. 
let hour = Math.floor(Math.random() * 24);
console.log(hour + ':00');

if (hour < 13) {
    console.log('good morning');
}

if (hour > 12){
    console.log("good afternoon");
}


//Produto de 2
function sum(num1, num2){
    return num1+num2;
}
console.log(sum(2,3));

function product(num1, num2){
    return num1 * num2;
}
console.log(product(4,5));


//Bingo
//Retorna 'bingo' se o número for maior que 4.
function card(num){
    if(num > 4){
        return 'bingo';
    }
}
console.log(card(5));






