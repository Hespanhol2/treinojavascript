const valores = [7.7, 8.9, 6.3, 9.2]    // array com 4 posições//

console.log(valores[0], valores[3])     // Imprimindo no console o valor da primeira posição e ultima//

console.log(valores.length)             // mostrando quantas posições têm //

valores.push({id:3}, false, null, 'texto', valores)  // Javascript aceita todo tipo em um mesmo array, melhor q java kk  //
// mas é bom separar, não misturar //

console.log(valores.pop()) // Deleta a ultima posição //

delete valores[0] // Deleta por posição citada //

console.log(typeof valores)  // Vai me dizer o que é //