
//definir una funcion
//tratar de no usar any

//los genericos son uador para saber que tipo de dato retorna segun el ingresado
export function whatMyType<T>(argument:T):T {

    return argument;
}

let amIString = whatMyType<string>('Hola mundoo');
let amINumber = whatMyType<number>(100);
let amIArray = whatMyType<number[]>([1,2,3,4,5,6,7,8,9]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed( ));
console.log(amIArray.join('-'));