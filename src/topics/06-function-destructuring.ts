
//iniciacion de objeto
//usar export en la interface para uisar el codigo en otro archivo 
//usar export antes de la interface. No es necesario si no se usara ese codigo en otro lado
export interface Product{
    description: string,
    price: number,
}

//objeto phone con atributos ya enviados
    const phone:Product = {
    description: "Iphone XR",
    price: 250.0,
    }

    //objeto tablet con atributos ya enviados
    const tablet:Product = {
    description: "Air p-2",
    price: 234.0,
    }


interface TaxCalculatoionOption{
    tax: number,
    products: Product[];
} 


//funcion para calcular el impuesto
//usr solo tres agumentos, pero si son mas mandar un objeto con interface es el 
//codigo de arriba
//function taxCalculator(options:TaxCalculatoionOption):[number, number] {
    export function taxCalculator(options:TaxCalculatoionOption):[number, number] {
    
        //desestrecturacion para poder mandar a llamar solo lso datos que quiero y no todos 
        //si es que en la TaxCalculatoionOption tenga muchos valores
        const {tax, products} = options;
    
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax]
}


//
const shoppingCart = [phone, tablet];
//tax es el impuesto 
const tax = 0.12;

//---------------son desestructuracion----------------/
//const result = taxCalculator({
//    products: shoppingCart,
//    tax: tax,
//})

//console.log('Total = ', result[0] );
//console.log('tax = ', result[1] );

//-------------con desestructutracion-----------/

const [total, taxTotal] = taxCalculator({
    products: shoppingCart,
    tax: tax,
});

//console.log('Total = ', total );
//console.log('Tax = ', taxTotal );

