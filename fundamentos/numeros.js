
const peso1 = 89.9                                      
                                                    /* constantes definidas
                                                    */

const peso2 = Number('55.9')

console.log(peso1, peso2) 
console.log(Number.isInteger(peso1))                   /* isInteger verifica se o numero definido pelo number é
                                                            Inteiro, para testar só precisa dizer Number em uma
                                                                    das varias const */
console.log(Number.isInteger(peso2))

const avaliacao1 = 8.76
const avaliacao2 = 7.41

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
    
console.log(media.toFixed(2))                           /* toFixed para cortar as casas decimais */
console.log(typeof media)                               /* typeof diz que tipo está sendo usado */
console.log(typeof Number)                              /* Ex: number, String, function e etc. */