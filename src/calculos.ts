abstract class Calculo{
    public abstract calcular(n1:number , n2:number) : number
}

class Adicao extends Calculo{
    public calcular(n1:number, n2:number): number {
        return n1 + n2
    }    
}

class Subtracao extends Calculo{
    public calcular(n1:number, n2:number): number {
        return n1 - n2
    }    
}

class Multiplicacao extends Calculo{
    public calcular(n1:number, n2:number): number {
        return n1 * n2
    }    
}

class Divisao extends Calculo{
    public calcular(n1:number, n2:number): number {
        return n1 / n2
    }    
}

export {Calculo , Adicao , Subtracao , Multiplicacao , Divisao}