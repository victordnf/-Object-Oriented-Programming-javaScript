"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var nome = _a.nome, sobrenome = _a.sobrenome, idade = _a.idade, cidade = _a.cidade;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cidade = cidade;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
