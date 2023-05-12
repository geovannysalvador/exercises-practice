//forma de declarar un string y un arreglo 
const skills: string [] = ['Bash', 'Counter', 'Healing'];


//ayuda a poder asignar el tipo de variable que usara el objeto 
interface Character{
    name: string;
    hp: number;
    skills: string[];
    //para decir que es opcional usar  = ?
    hometown?: string;
    //tambien se puede usar  pero debo declararlo en la cont como: hometown: ""
    //hometown: string | uundefined;
}


//indica que contiene el objeto
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
};

strider.hometown = 'Riverdell';

console.table(strider);

export{};