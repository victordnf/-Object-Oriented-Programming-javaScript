"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aviao_1 = require("./aviao");
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var altura = prompt('Digite a altura do avião: ');
var comprimento = prompt('Digite o comprimento do avião: ');
var envergadura = prompt('Digite a envergadura da asa: ');
var combustivel = prompt('Digite a quantidade máxima de combústivel: ');
var companhia = prompt('Digite a companhia do avião: ');
var modelo = prompt('Digite o modelo do avião : ');
var velocidade = prompt('Digite a velocidade máxima do avião ');
var motor = prompt('Digite o tipo de motor do avião: ');
var peso = prompt('Digite o peso do avião vazio: ');
var aviao = new aviao_1.Aviao({
    altura: altura,
    combustivel: combustivel,
    companhia: companhia,
    comprimento: comprimento,
    envergadura: envergadura,
    modelo: modelo,
    motor: motor,
    peso: peso,
    velocidade: velocidade
});
console.log("O avi\u00E3o ".concat(modelo, ", tem um comprimento de ").concat(comprimento, " metros, e sua altura \u00E9 ").concat(altura, " metros e possui um motor ").concat(motor, "."));
console.log("A envergadura da asa tem ".concat(envergadura, " metros, podendo aos impressionantes ").concat(velocidade, " KM/h."));
console.log("Ele comporta at\u00E9 ".concat(combustivel, " litros de combustivel e pesa ").concat(peso, " KGs."));
console.log("A companhia respons\u00E1vel pelo avi\u00E3o \u00E9 a ".concat(companhia, "."));
