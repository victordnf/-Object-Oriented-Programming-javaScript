import { Cliente } from "./Pessoa"
import PromptSync = require ('prompt-sync'); 

const prompt = PromptSync();

const nome = prompt("Digite seu nome: ")
const sobrenome = prompt('Digite seu sobrenome: ')
const idade = prompt('Digite sua idade: ')
const cidade = prompt('Digite sua cidade: ')

const cliente = new Cliente({
    nome,
    sobrenome,
    idade,
    cidade
})

console.clear()
console.log(`Nome do cliente: ${nome} ${sobrenome}.`)
console.log(`Idade do cliente: ${idade}.`)
console.log(`Endereço do cliente: ${cidade}.`)