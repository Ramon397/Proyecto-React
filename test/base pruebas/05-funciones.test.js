import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-Funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser={
            uid: 'ABC123',
            username: 'El_Pa'
        };
        const  user=getUser();
        expect(testUser).toEqual(user);
        //console.log(user);
    });
    test('getUsuario debe de retornar Objeto ', () => { 
        const name='Ramon';
        const user = getUsuarioActivo(name);
        expect(user).toStrictEqual({
            uid:'ABC567',
            username:name
        });


     });

    
});