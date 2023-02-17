//Single Responsibility Principle
//clases con una unica funcion o respoonsabilidad

class factura {

    
    reunirdatos(datos) {

        console.log('recopilando datos')
        console.log(datos)
        console.log('factura finalizada..')

    }

}

class impresion {

    imprimirfactura(datos) {

        console.log('imprimiendo factura...')
        console.log('----------------'+datos+'---------------')
        

    }



}


class procesarfactura {

    proceso(datoss) {

        let creacion = new factura()
    creacion.reunirdatos(datoss)
        let imprimiendo = new impresion()
        imprimiendo.imprimirfactura(datoss)  
    }
}

let alkosto = new procesarfactura()
alkosto.proceso('atun:500, broccoli:2000, helado:2000, acondicionador:9500')