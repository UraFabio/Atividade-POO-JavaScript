class Matriculados{
    constructor(matricula, nome, prova1, prova2, trabalho){
        this.matricula = matricula
        this.nome = nome
        this.prova1 = prova1
        this.prova2 = prova2
        this.trabalho = trabalho
    }
    media(){
        return (this.prova1*2.5 + this.prova2*2.5 + this.trabalho*2)/7
    }

    final(){
        let media = this.media()
        if(media >= 7) return 0
        else return 7-media
    }
}

const aluno = new Matriculados(24993, 'fabio', 6, 7, 6)

console.log(`Media = ${aluno.media().toFixed(2)}`)

console.log(`precisa de ${aluno.final().toFixed(2)} ponto`)