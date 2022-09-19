interface NewAviao{
    combustivel: string;
    velocidade: number;
    modelo: string;
    companhia: string;
    peso: number
    envergadura: number
    altura: number
    comprimento: number 
    motor: string
}

class Aviao {
    private motor: string
    private combustivel: string;
    private velocidade: number;
    private modelo: string;
    private companhia: string;
    private peso: number;
    private envergadura: number;
    private altura: number;
    private comprimento: number; 

    constructor({combustivel,altura,companhia,peso,motor,modelo,velocidade,envergadura,comprimento}: NewAviao){
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
}


export { Aviao };