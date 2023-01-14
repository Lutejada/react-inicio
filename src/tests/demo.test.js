describe('Pruebas en <DemoComponent />', ()=>{

    test('Esta prueba no puede fallar', () => {

        // 1 inicializacion
        const mensaje1 = "hola Mundo";
    
        // 2 Estimulo
        const mensaje2 = mensaje1.trim();
    
        // 3 Observar el comportamiento observado
        expect( mensaje1).toBe( mensaje2);
        
    });    

});


