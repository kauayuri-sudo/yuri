import {test, expect} from '@jest/globals'
const soma = require('./soma')

test('deve somar dois numeros', () => {
const resultado = soma(5, 10);
expect(resultado).toBe(15);
})