class Usuario{
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }
}

const usuario1 = new Usuario('fabioura@gmail.com', 'minhaSenha123')

console.log(usuario1.email)
console.log(usuario1.senha)