"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(_a) {
        var combustivel = _a.combustivel, altura = _a.altura, companhia = _a.companhia, peso = _a.peso, motor = _a.motor, modelo = _a.modelo, velocidade = _a.velocidade, envergadura = _a.envergadura, comprimento = _a.comprimento;
        this.altura = altura;
        this.motor = motor;
        this.combustivel = combustivel;
        this.companhia = companhia;
        this.comprimento = comprimento;
        this.envergadura = envergadura;
        this.modelo = modelo;
        this.peso = peso;
        this.velocidade = velocidade;
    }
    return Aviao;
}());
exports.Aviao = Aviao;
