interface NewCliente{
    nome: string;
    sobrenome: string
    idade: number
    cidade: string
}
class Cliente { 
    public nome: string;
    public sobrenome: string;
    public idade: number;
    public cidade: string;

    constructor({nome, sobrenome, idade, cidade}: NewCliente){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.cidade = cidade
        }
}

export {Cliente};