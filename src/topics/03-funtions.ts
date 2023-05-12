
//al mandar parametros se indica la variable y el tipo de dato siempre
function addNumbers(a:number, b:number):number {
    return a+b;
}

//ademas de la funcion podemos hacer una funcion de flecha 

//indicarle despues de los dos puntos el tipo de dato de retinro puede ser numero 
//o string en este caso es string.
const addNumbersArrow = (a:number, b:number):string => {
    //formatopara regresar un string cuando se manejan numeros
    return `${ a + b }`;
}


//funcion nueva de multiplicacion

function multiply(firstNumber:number, secoundNumber?:number, base:number = 2):number {
    return firstNumber * base;
}


//ambos const son para mandarles datos a las funciones para que trabajen y guardar el dato 
//en una variable para poderlas imprimir en el consolo.log de abajo
    //se puede cambiar el resultado de numero a cadena de caracter
    //const result: string = addNumbers(1,2).toString();
    ////const result: number = addNumbers(1,2);
    //usando la funcion de flecha
    ////const result2: string = addNumbersArrow(1,2);

    //nueva funcion 
    ////const multiplyresult3: number = multiply(5);

//para imprimir como un objeto 
//console.log({result})

//imoresion normal 
////console.log({result, result2, multiplyresult3});


//-----------------------------Nuevo bloque de codigo---------------------------------------//

//se crean el objeto con sus tipos de datos
interface Character {
    name: string;
    hp: number;
    //funcion dentro de una interfa. Usar una funcion de flecha y despues usar el tipo de variable es este caso void
    showHp: () => void;
}

//aca idnicamos que debe de hacer con los datos 
const healCaracter = (caracter:Character, amount:number) =>{
    caracter.hp += amount;
}

//aca solo vamos a indicar los valores 
const strider:Character = {
    name: 'Strider',
    hp: 50,
    showHp (){
        console.log(`puntos de vida ${this.hp}`)
    }
};

healCaracter(strider, 20);

strider.showHp();


export {};