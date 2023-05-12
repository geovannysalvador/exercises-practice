//Product es el nombre de la interface del archivo 06

import { Product, taxCalculator} from "./06-function-destructuring";

const shoopingCart: Product[] = [
    {
    description: 'Novia',
    price: 100
    },
    {
    description: 'Ipad',
    price: 150
    }
];

const [total, tax] = taxCalculator({
    tax: 0.15,
    products: shoopingCart
});

console.log('Total: ', total);
console.log('Tax: ', tax);