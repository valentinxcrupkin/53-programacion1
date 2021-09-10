export default class Area {

    base1;
    base2;
    h;

    constructor(){}

    calcularArea()
    {
        const resultado = this.base1 + this.base2 * this.h / 2
        console.log(resultado)
        return resultado;
    }
}