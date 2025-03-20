import * as readline from "readline"
import Calculo from "./calculo";
import Divisao from "./divisao";
import Multiplicacao from "./multiplicacao";
import Adicao from "./adicao";
import Subtracao from "./subtracao";
import segundoGrau from "./segundoGrau";
import Potenciacao from "./potenciacao";
import Radiciacao from "./radiciacao";

let error = () => {
    console.log("Entrada Inválida")
}

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question("Digite os números e a operação desejada (Ex.: 1,2,adicao = 3) \n" , (input: string) => {
        let dados = input.split(",")
        let n1 = Number(dados[0])
        let n2 = Number(dados[1])
        let n3
        let equacao

        if(dados.length == 3){
            equacao = String(dados[2]).toLowerCase()
        }
        else if(dados.length == 4){
            n3 = Number(dados[2])
            equacao = String(dados[3]).toLowerCase()

            if(equacao != "raiz"){ 
                error()
                leitor.close()
                return
            }
        }
        else{
            error()
            leitor.close()
            return
        }

        let calculo
        switch(equacao){
            case "adicao":
                calculo = new Adicao()
                console.log(`Resultado: ${calculo.calcular(n1 , n2)}`)
                break
            case "subtracao":
                calculo = new Subtracao()
                console.log(`Resultado: ${calculo.calcular(n1 , n2)}`)
                break
            case "multiplicacao":
                calculo = new Multiplicacao()
                console.log(`Resultado: ${calculo.calcular(n1 , n2)}`)
                break
            case "divisao":
                calculo = new Divisao()
                console.log(`Resultado: ${calculo.calcular(n1 , n2)}`)
                break
            case "potenciacao":
                calculo = new Potenciacao()
                console.log(`Resultado: ${calculo.calcular(n1 , n2)}`)
                break
            case "radiciacao":
                calculo = new Radiciacao()
                console.log(`Resultado: ${calculo.calcular(n1 , n2)}`)
                break
            case "raiz":
                calculo = new segundoGrau()
                console.log(calculo.calcular(n1 , n2 , n3))
                break
            default:
                error()
                break
        }

        leitor.close()
        
    })
}

iniciar()