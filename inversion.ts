//Dependency Inversion Principle
//ninguna clase de alto nivel debe depender de otra de bajo, ambas deben depender de abstracciones 
//dependen de la abstraccion y no de implementaciones concretas
//no deben existir dependencias entre las funciones sino que dependan de las abstracciones

//si un metodo esta atado a una clase o a otro metodo dentro de esa clase, se crea una interface con ese metodo para poder usarlo en  las funciones que necesitemos por medio del constructor
class Numbers{
	
    numbersArray = [1,2,3,4,5,6,7,8,9]
    response = new Array()
    range
    constructor(range){
      this.range = range
      this.getNumbersFromRange()
    }
    
    getNumbersFromRange(){
      for(let i = 0; i < this.range; i++){
        this.response.push(this.numbersArray[i])
      }
    }
  }
  
  class Calculate{ //calculate es la que van a heredar las demas clases
   numbers
    result = 1
    
    constructor(range){
      this.numbers = new Numbers(range).response
    }
    
    operate(){}
    
    response(){
      console.log(this.result)
    }
  }
  
  class Sumar extends Calculate{
    operate(){
      this.numbers.forEach(num => {
        this.result += num
      })
    }
  }
  
  class Multiplicar extends Calculate{//hereda  de calculate 
    operate(){
      this.numbers.forEach(num => {
        this.result *= num
      })
    }
  }
  
  let multiply = new Multiplicar(5)
  multiply.operate()
  multiply.response()