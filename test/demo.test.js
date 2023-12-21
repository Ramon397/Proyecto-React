describe('Pruebas de <DemoComponent>', () => { 
    test('Esta prueba no debe fallar',() => {
        if(0===0){
            //1.-inicializacion
            const message1='Hola Mundo';
            //2.-estimulo
            const message2=message1.trim();
            //3.-Observar el comportamiento esperado
            expect(message1).toBe(message2);
            
        }
    })    
});
