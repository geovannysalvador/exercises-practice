

//una clase es como un molde de galletas, es decir siempre seran de la misma forma
export class Person{

    //estas variables son property ya que estan dentro de una clase
    //se deben de initialier con un constructor
    public name: String;
    public address:string;
    //si es private solo se puede usar dentro del bnloque de codigo de PErson y afuera no se puede acceder en ella
    private phone:number;
    public email?:string;   

    //se puede tener constructor sin argumentos o con argumentos ().
    //cuando se me mandan datos puesen ser directos o nuevos. por ejemplo 
    //un dato directo::: this.name = 'Geovanny';
    constructor(name:string, address: string, phone:number, email:string) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        
    }

}

//esta es otra forma de hacero, es decir en lugar de tener un apartado de declaracion de vatiavles y liego llamarlas
//al consgtructor se pueden juntar para tener un coduigo mas limpio

export class Person2{

    constructor(
        public name:string, 
        public address: string, 
        public phone:number, 
        //public email:string
        //tambien se pueden asignar de forma directa
        public email:string,
    ) 
    {}
}

///--------------- extender una clase-------------------//

// export class hero extends Person2{

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){

//     //la palabra super es una palabra reser que indica que tiene que llamar al 
//     //constructor del padre en este caso Person necesita su cinstructor 
//         super(realName, '',4545,'');
//     }
// }


//practica de herencia  solo modificar una pero la otra siempre lleva la misma info
//es decir reutilizar la instancia creada y mandarlo por inyeccion de dependencias 
export class hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public Person2: Person2,
    ){}
}

//primero se inicia es decir los primeros valores que se hacen comun
const tony = new Person2('JonyAlex','calle',25,'correo');
//ahora mandamos los datos de hero, pero tambien mandamos los datos de la persona
const ironman = new hero('Tony',25,' HeroAcademy', tony);

console.log(ironman);
//------------------------------------


//en este inicializador de la clase si hay argumentos en el constructor debe de ir en 
//este const los argumentos indicados 
//ingreso de datos
const salidaDeDatos = new Person('JonyAlex','New York',1,'no hay ');
//aca solo borre el ultimo parametro ya que en el constructor se ingresa de forma directa
const salidaDeDatos2 = new Person2('Andres','Dallas',2,"");

//console.log(salidaDeDatos);
//console.log(salidaDeDatos2);