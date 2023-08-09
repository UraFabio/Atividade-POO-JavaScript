class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    apresentar(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo}`)
    }
}

const novaPessoa = new Pessoa('fabio', 22, 'masculino')

novaPessoa.apresentar()