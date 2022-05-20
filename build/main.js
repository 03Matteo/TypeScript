"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//stringhe numeri e booleani
const stringa = 'Hello World';
const numero = 123;
const booleano = true;
//array e oggetti
const strArr = ['Hello', 'World'];
const strArr1 = ['Hello', 'World'];
const numArr = [1, 2, 3];
const numArr1 = [1, 2, 3];
const boolArr = [true, false];
const boolArr1 = [true, false];
const oggetto = { nome: 'Mario', cognome: 'Rossi' };
//proprietà opzionale 
const oggetto1 = { nome: 'Mario', cognome: 'Rossi' };
//funzioni void = non ritorna niente
const funzione = () => { };
function funzione1() { }
const params = (param, param1) => {
    return [1, 2, 3];
};
//any e unknown, qualunque valore
const unk = (any, unk) => {
    any.ciao();
    //unk.ciao(); errore
};
const tipo1 = {
    a: 'ciao',
    b: 123,
    c: true
};
const interfaccia = {
    a: 'ciao',
    b: 123,
    c: true
};
//enum parte da 0 o da un valore inserito e lo incrementa
//se viene assegnato un valore più piccolo quello dopo viene incrementato a partire da quello
var numEnum;
(function (numEnum) {
    numEnum[numEnum["a"] = 4] = "a";
    numEnum[numEnum["b"] = 5] = "b";
    numEnum[numEnum["c"] = 70] = "c";
    numEnum[numEnum["d"] = 71] = "d";
})(numEnum || (numEnum = {}));
//defaultImp(0);
//console.log(booleano1);
//classi
class Persona {
    constructor(param_età, param_cognome, param_nome, sus) {
        this.età = param_età;
        this.cognome = param_cognome;
        this.nome = param_nome;
        this.sus = sus;
    }
}
class Me extends Persona {
    constructor(param_età, param_cognome, param_nome, sus) {
        super(param_età, param_cognome, param_nome, sus);
    }
}
const persona = new Persona(19, 'Rossi', 'Mario', true);
