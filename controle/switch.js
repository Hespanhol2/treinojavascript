const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 8:
            console.log('Muito bom')
            break
            case 6:
                console.log('médio')
                break
                case 4:
                    console.log('Muito ruim')
                    break
                    default:
                        console.log('Faz de novo filé')

    }
}

imprimirResultado(6)