import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('pruebas en 07-deses-arr ', () => {
     test('debe de retornar un string y nu número', () => { 
        const [letters, numbers]=retornaArreglo();
        //console.log(retorno); 
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        //esperando el tipo de dato
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(letters).toEqual(expect.any(String));//que regrese cualquier string
    });
});