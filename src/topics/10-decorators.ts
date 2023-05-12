
// los decoradores es una simple funcion 

function classDecorator(){

}


@classDecorator

//clase comun y corriente

class SuperClass {

    public myProperty: String = 'Abc123';

    print(){
        console.log('Hola mundo')
    }
}

//definicin de la clase, es decir toda la clase impresa
console.log( SuperClass);

//imtsncia de la super clase
const myClass = new SuperClass();
console.log(myClass);