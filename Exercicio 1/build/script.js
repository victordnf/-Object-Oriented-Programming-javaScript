"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var nome = prompt("Digite seu nome: ");
var sobrenome = prompt('Digite seu sobrenome: ');
var idade = prompt('Digite sua idade: ');
var cidade = prompt('Digite sua cidade: ');
var cliente = new Pessoa_1.Cliente({
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    cidade: cidade
});
console.log("Nome do cliente: ".concat(nome, " ").concat(sobrenome, "."));
console.log("Idade do cliente: ".concat(idade, "."));
console.log("Endere\u00E7o do cliente: ".concat(cidade, "."));
