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

//factorial del numero n
//n <= 0 excepción RangeError("solo números enteros >= 0")
//n = 0 devuelve 0
//n = 1 devuelve 1
//n >= 2 f(n) = f(n-1)+ f(n-2)