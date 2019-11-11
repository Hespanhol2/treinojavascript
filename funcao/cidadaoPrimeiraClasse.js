
// criar de forma literal
function fun1(){ 

}

// Armazenar em uma variável
const fun2 = function (){

}

// Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Função pode retornar/conter um função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(10,5)(2)
