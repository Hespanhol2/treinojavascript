function tratarErroElancr(erro){
  //  throw new Error('Aconteceu um erro')
  throw 'Erro inesperado'
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() +  '!!!')
    }catch (e) {
        tratarErroElancr(e)
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)