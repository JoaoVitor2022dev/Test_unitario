const { calcular } = require('../test_unitarios/calcule');

describe('testando a calculadora', () => { 
    it('function calcule(){}', () => { 
        expect(calcular(1,2,"+")).toBe(3);
    })
})