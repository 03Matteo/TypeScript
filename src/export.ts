//qualunque cosa esportata è una costante, non si può cambiare da file esterni

export const stringa1: string = 'ciao';
export const numero1: number = 123;
export const booleano1: boolean = true;

export default function funczione(param: any): any {
    return console.log(param);
}