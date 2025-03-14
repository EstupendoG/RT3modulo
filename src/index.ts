import Calculo from "./calculo";
import Divisor from "./divisor";
import Multiplicador from "./multiplicador";
import Soma from "./somador";
import Subtrador from "./subtrador";

let soma = new Soma
let sub = new Subtrador
let multi = new Multiplicador
let div = new Divisor

console.log(`Adiçao: ${soma.calcular(0.1 , 0.2)}`)