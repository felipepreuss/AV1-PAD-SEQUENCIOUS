var sequencia = [1,3,5,7,9]
//A sequência é de dois em dois

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
    } else {
        console.log("ERROU")
    }
}