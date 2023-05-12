
// los decoradores es una simple funcion 

function classDecorator<T extends {new (...arg:any[]): { }}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }

}


@classDecorator

//clase comun y corriente

 export class SuperClass {

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