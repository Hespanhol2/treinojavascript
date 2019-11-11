const notas = [7.7, 7.0, 5.5, 8.9, 7.1, 6.0, 8.9, 7.4]

// Sem callback

let notasBaixas1 = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

////////////////////////////
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
