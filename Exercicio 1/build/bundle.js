var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var pessoa = new Cliente();
pessoa.nome = 'Victor';
pessoa.sobrenome = 'França';
pessoa.idade = 18;
pessoa.cidade = 'Rio De Janeiro';
pessoa.bairro = 'Caju';
console.log("Nome do cliente: ".concat(pessoa.nome, " ").concat(pessoa.sobrenome));
console.log("Idade do cliente: ".concat(pessoa.idade));
console.log("Endere\u00E7o do cliente: ".concat(pessoa.cidade, ", bairro ").concat(pessoa.bairro));
