import { describe,it , expect } from 'vitest'; //trae todas las funciones de prueba de Vitest
import{fibonacci, esPinValido} from '../src/calculadora.js';
import chalk from 'chalk';

describe ('Función fibonacci',() =>{
it('debe devolver 0 cuando n es 0',() =>{
    expect(fibonacci(0)).toBe(0);
});
it('debe devolver 1 cuando n es 1',()=>{
    expect(fibonacci(1)).toBe(1);
    
});
it('debe devolver 1 cuando n es 2',()=>{
    expect(fibonacci(2)).toBe(1);
});
it('debe devolver 2 cuando n es 3',()=>{
    expect(fibonacci(3)).toBe(2);
});
it('debe devolver 8 cuando n es 6',()=>{
    expect(fibonacci(6)).toBe(8);
});
it('debe lanzar RangeError para un número negativo', () => {
    expect(() => fibonacci(-1)).toThrow(
        new RangeError('solo números enteros >= 0'));
 });
it("debe rechazar los números decimales", () => {
        expect(() => fibonacci(2.5)).toThrow(RangeError('solo números enteros >= 0'));
    });
});
console.log(chalk.green("Tests de Fibonacci preparados"));

describe('Función esPinValido',()=>{
   it('no puede ser null o undefined', () => {
        expect(() => esPinValido(null))
            .toThrow(new Error('No puede ser null o undefined'));

        expect(() => esPinValido(undefined))
            .toThrow(new Error('No puede ser null o undefined'));
    });

    it('No puede andar vacío',()=>{
        expect(esPinValido('').toThrow(new Error('No puede estar vacío')));
    });
    it('debe tener una longitud de 4 o 6 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
        expect(esPinValido('123456')).toBe(true);

        expect(() => esPinValido('123'))
            .toBe(false);
        expect(() => esPinValido('12345'))
            .toBe(false);
        expect(() => esPinValido('1234567'))
            .toBe(false);
    });
    it('solo puede contener dígitos del 0 al 9', () => {
        expect(() => esPinValido('12a4')).toBe(false);
        expect(() => esPinValido('12 4')).toBe(false);
        expect(() => esPinValido('12-4')).toBe(false);
    });

    it('no puede tener todos los dígitos iguales', () => {
        expect(() => esPinValido('1111')).toBe(false);
        expect(() => esPinValido('888888')).toBe(false);
        expect(() => esPinValido('33333')).toBe(false);
    });
});