import Calculo from "./calculo";

export default class segundoGrau extends Calculo{
    public calcular(n1:number , n2:number) : number
    public calcular(a:number , b:number , c:number) : string
    
    public calcular(a:number , b:number , c?:number) : number | string{
        if(c === undefined){
            c = 0
        }
        
        let delta = (b ** 2) - (4 * a * c)
        if(delta < 0){ return "Sem raízes reais"}
        
        let x1 = Math.floor((-b + Math.sqrt(delta)) / (2 * a))
        let x2 = Math.floor((-b - Math.sqrt(delta)) / (2 * a))

        return (`Raiz 1: ${x1} | Raiz 2: ${x2}`)
    }
}