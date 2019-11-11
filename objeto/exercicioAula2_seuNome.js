
function triangulo(A=533.4, C=124.8) {
    
    return (A*C/2) 
}

console.log('Essa é a área do triangulo:' + triangulo().toFixed(3))
console.log()


function circulo(pi = 3.14159, C=124.8){

    return (pi * (C * C) )

}
console.log('Essa é a área do circulo de raio C:' + circulo().toFixed(3))


function trapézio(A=533.4, B=221.7, C=124.8){

    return(A + B /2 * C)
}
console.log()
console.log('Essa é a área do trapézio:' + trapézio().toFixed(3))



function quadrado(B=221.7,){
    
    return(B * B)
}
console.log()
console.log('Essa é a área do quadrado:' + quadrado().toFixed(3))



function retangulo(A=533.4, B=221.7){
  
    return(A * B)
}
console.log()
console.log('Essa é a área do retângulo:' + retangulo().toFixed(3))