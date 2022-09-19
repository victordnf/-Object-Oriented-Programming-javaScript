class Cliente { 
    public nome: string;
    public sobrenome: string;
    public idade: number;
    public cidade: string;
    public bairro: string;
}
const pessoa: Cliente =  new Cliente();

pessoa.nome = 'Victor'
pessoa.sobrenome = 'França'
pessoa.idade = 18
pessoa.cidade = 'Rio De Janeiro'
pessoa.bairro = 'Caju'

console.log(`Nome do cliente: ${pessoa.nome} ${pessoa.sobrenome}`)
console.log(`Idade do cliente: ${pessoa.idade}`)
console.log(`Endereço do cliente: ${pessoa.cidade}, bairro ${pessoa.bairro}`)