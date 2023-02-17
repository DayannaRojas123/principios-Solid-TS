//Open/Closed Principle
//cuando se cambia el comportamiento de una clase las que dependen de ella no necesitan cambiar su comportamiento

interface IFigura { //interfaz base abierta a mas extensiones
    getArea(): number;
}

class Circulo implements IFigura {//no cambia ante cualquier modificacion
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    public getArea(): number {
        return this.radio * this.radio * Math.PI;
    }
}


class Triangulo implements IFigura { //no cambia ante cualquier modificacion

    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    public getArea(): number {
        return (this.base * this.altura) / 2;
    }
}

const figura1: IFigura = new Triangulo(2, 3);
const figura2: IFigura = new Circulo(2);

console.log(figura1.getArea());
console.log(figura2.getArea());