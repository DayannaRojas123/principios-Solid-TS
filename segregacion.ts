//Interface Segregation Principle
//estamos seguros de que la clase que implementa lo de la interfaz puede implementar todos los metodos de ella, sino creamos mas interfaces con cada metodo divido


interface IReloj { 
    getTime(): Date;
}

interface IRelojInteligente extends IReloj {
    getEmailNotifications(): String;
}

class RelojInteligenteImpl implements IRelojInteligente {//es reloj inteligente, podra implementar la interfaz del inteligente

    public getTime(): Date {
        return new Date();
    }

    public getEmailNotifications(): String {
        return "Tienes 2 emails";
    }
}

class RelojImpl implements IReloj {//es reloj normal, solo podra implementar la interfaz del reloj basico

    public getTime(): Date {
        return new Date();
    }
}

const relojInteligente = new RelojInteligenteImpl();
console.log("Inteligente: ", relojInteligente.getTime().toDateString())
const reloj = new RelojImpl();
console.log("Simple: ", reloj.getTime().toDateString())