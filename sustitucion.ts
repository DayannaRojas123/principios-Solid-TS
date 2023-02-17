//Liskov Substitution Principle
//una clase derivada se debe poder sustituir por su clase base, permite usar correctamente la herencia
//se crea una clase base y sus interfaces con los atributos y metodos divididos para que otras clases puedan heredar sin problema


class patoGoma{//clase base
    chillar(){
      console.log('Chillar')
    }
  }
  
  class patoReal{//clase base
    comer(){
      console.log('Comiendo..')
    }
    


    parpar(){
      console.log('Ckuag!!')
    }
  }
  
  class Pato extends patoReal{}//pato puede heredar sin problema comer y parpadear
  class PatoToy extends patoGoma{}//patoToy puede heredar sin problema chillar de la clase patogoma
  
  let patoreal = new Pato()
  patoreal.comer()
  patoreal.parpar()
  
 let juguete = new PatoToy()
  juguete.chillar()