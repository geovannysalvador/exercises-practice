
interface AudioPlayer{
    audiovolume: number,
    soungDuration: number,
    soung: string,
    details: Details,
}

interface Details {
    author: string,
    year: number,
}

//control punto para que me importe de forma manual 
const audioPlayer: AudioPlayer = {
    audiovolume: 90,
    soungDuration: 60,
    soung: "alone",
    details: {
        author: "Post Malone",
        year: 2020,
    }
}

//Una forma de mostra, pero muchas propiedades a escribir. por ello usar destructuring  
//--console.log('Song: ', audioPlayer.soung);
//--console.log('duration: ', audioPlayer.soungDuration);
//--console.log('author: ', audioPlayer.details.author);

//forma para usar desestructuracion
//const {soung:otherSong, soungDuration:duration } = audioPlayer;
//para usar el objeto dentro de otro 
//const {author:author} = audioPlayer.details;

//console.log('Song: ', otherSong);
//console.log('Song: ', duration);
//console.log('Song: ', author);

//---------------desestructuracion de arreglos-----------------------------//
// en lugar de usar llaves se usan llaves cuadradas de arreglos

//arreglos de strings de fornma normal 

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const menssegeError =  dbz[3] || 'no existe el personaje';

console.error('Personaje 3:', menssegeError);

//usando desestructuracion en arreglos seria:
//dejar la coma son nada para que vea que no se usa esa posicion. El mensaje es por si no encuentra el dato en el arreglo 
const [, , p3 = 'No existe este personaje en la bd']:string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 3:', p3);


export {};