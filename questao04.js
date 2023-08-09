class Calculadora{
    constructor(n1, n2){
        this.n1 = n1
        this.n2 = n2
    }
    adicao(){
        console.log(`${this.n1} + ${this.n2} = ${this.n1+this.n2}`)
    }
    subtracao(){
        console.log(`${this.n1} - ${this.n2} = ${this.n1-this.n2}`)
    }
    multiplicacao(){
        console.log(`${this.n1} x ${this.n2} = ${this.n1*this.n2}`)
    }
    divisao(){
        console.log(`${this.n1} / ${this.n2} = ${this.n1/this.n2}`)
    }
}

const numeros = new Calculadora(5, 8)

numeros.adicao()
numeros.subtracao()
numeros.multiplicacao()
numeros.divisao()