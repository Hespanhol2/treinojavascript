const notas = [6.7, 6.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome:'Ana',
    sobrenome:'Silva',
    idade:55
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)

}