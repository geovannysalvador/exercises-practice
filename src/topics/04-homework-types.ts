/*
    ===== Código de TypeScript =====
*/

//se define las variables que usa en constante
interface SuperHeroF{
    name: string,
    age: number,
    //el codigo comentado es una forma de hacerlo aunque es recomendado hacerlo mas simple
    //Es mejor hacer una interfas nueva para dividir el objeto y sea mas simple 
    //address: {
       // street: string,
       // country: string,
       // city: string,
    //}
    address: Address,
    showAddress: () => string;
    //otra forma 
    //showAddress(): string;
}

interface Address {
    street: string,
    country: string,
    city: string,
}


const superHeroe: SuperHeroF = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};