//stringhe numeri e booleani
const stringa: string = 'Hello World';
const numero: number = 123;
const booleano: boolean = true;

//array e oggetti
const strArr: string[] = ['Hello', 'World'];
const strArr1: Array<string> = ['Hello', 'World'];

const numArr: number[] = [1, 2, 3];
const numArr1: Array<number> = [1, 2, 3];

const boolArr: boolean[] = [true, false];
const boolArr1: Array<boolean> = [true, false];

const oggetto: { cognome: string, nome: string  } = { nome: 'Mario', cognome: 'Rossi' }; 
//proprietà opzionale 
const oggetto1: { cognome: string, nome?: string } = { nome: 'Mario', cognome: 'Rossi' };

//funzioni void = non ritorna niente
const funzione: () => void = () => { };

function funzione1(): void { }

const params: (param: number[], param1: boolean) => number[] = (param: number[], param1: boolean) => {
    return [1,2,3];
};

//any e unknown, qualunque valore

const unk: (any: any, unk: unknown) => any = (any: any, unk: unknown) => {
    any.ciao();
    //unk.ciao(); errore
}

//types
type tipo = {
    a: string,
    b: number,
    c: boolean
}

const tipo1: tipo = {
    a: 'ciao',
    b: 123,
    c: true
}

//interfaces iniziano con I per convenzione
interface Iinterfaccia {
    a: string;
    b: number;
    c: boolean;
    [key: string]: any; //permette di aggiungere proprietà senza includerle nell'interfaccia
}

const interfaccia: Iinterfaccia = {
    a: 'ciao',
    b: 123,
    c: true
}

//enum parte da 0 o da un valore inserito e lo incrementa
//se viene assegnato un valore più piccolo quello dopo viene incrementato a partire da quello
enum numEnum {
    a = 4, 
    b,
    c = 70,
    d
}

//imports
import defaultImp from './export';
import { stringa1, numero1, booleano1 } from './export';

//defaultImp(0);
//console.log(booleano1);

//classi
class Persona {
    public età: number; //si ha accesso ad essa da ogni parte
    private cognome: string; //si ha accesso ad essa solo dentro la classe madre
    protected nome: string; //si ha accesso ad essa dentro la classe madre e dentro ogni classe imparentata
    public readonly sus: boolean; //const 

    constructor(param_età: number, param_cognome: string, param_nome: string, sus: boolean) {
        this.età = param_età;
        this.cognome = param_cognome;
        this.nome = param_nome;
        this.sus = sus;
    }
}

class Me extends Persona {
    constructor(param_età: number, param_cognome: string, param_nome: string, sus: boolean) {
        super(param_età, param_cognome, param_nome, sus);
    }
}

const persona: Persona = new Persona(19, 'Rossi', 'Mario', true);