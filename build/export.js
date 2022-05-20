"use strict";
//qualunque cosa esportata è una costante, non si può cambiare da file esterni
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleano1 = exports.numero1 = exports.stringa1 = void 0;
exports.stringa1 = 'ciao';
exports.numero1 = 123;
exports.booleano1 = true;
function funczione(param) {
    return console.log(param);
}
exports.default = funczione;
