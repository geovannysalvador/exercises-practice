

export interface Passenger{
    name: string,
    children?: String[],
}

const passenger1: Passenger ={
    name: 'Geovanny',
}

const passenger2: Passenger ={
    name: 'GeovannyTS',
    children: ['Eliza', 'Lourdes']
}

const printChildren = (passenger: Passenger) => {

    //nos muestra el numero de hijos que tiene y sino me muestre cero
    //const howManyChildren = passenger.children!.length || 0;
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, 'Tiene ', howManyChildren);
}

printChildren(passenger1);