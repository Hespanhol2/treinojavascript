function criarProduto2(nome, preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}
console.log(criarProduto2('Notebook', 2559.89))
console.log(criarProduto2('RTX2060', 2259.89))
