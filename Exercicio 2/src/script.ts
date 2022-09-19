import { Aviao } from "./aviao"
import PromptSync = require('prompt-sync');

const prompt = PromptSync();

const altura = prompt('Digite a altura do avião: ');
const comprimento = prompt ('Digite o comprimento do avião: ');
const envergadura = prompt ('Digite a envergadura da asa: ');
const combustivel = prompt ('Digite a quantidade máxima de combústivel: ');
const companhia = prompt ('Digite a companhia do avião: ');
const modelo = prompt ('Digite o modelo do avião : ');
const velocidade = prompt ('Digite a velocidade máxima do avião ');
const motor = prompt ('Digite o tipo de motor do avião: ');
const peso = prompt ('Digite o peso do avião vazio: ');

const aviao = new Aviao({
    altura,
    combustivel,
    companhia,
    comprimento,
    envergadura,
    modelo,
    motor,
    peso,
    velocidade
});

console.log(`O avião ${modelo}, tem um comprimento de ${comprimento} metros, e sua altura é ${altura} metros e possui um motor ${motor}.`);
console.log(`A envergadura da asa tem ${envergadura} metros, podendo aos impressionantes ${velocidade} KM/h.`)
console.log(`Ele comporta até ${combustivel} litros de combustivel e pesa ${peso} KGs.`)
console.log(`A companhia responsável pelo avião é a ${companhia}.`)