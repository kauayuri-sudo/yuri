const multiplicacao = require('./multiplicacao');

test("deve multiplicar dois números positivos", () => {
  expect(multiplicacao(4, 5)).toBe(20);
});

test("deve multiplicar um número positivo por um negativo", () => {
  expect(multiplicacao(4, -5)).toBe(-20);
});

test("deve multiplicar dois números negativos", () => {
  expect(multiplicacao(-4, -5)).toBe(20);
});

test("deve multiplicar 4 por 5 e resultar em 25", () => {
  expect(multiplicacao(4, 5)).toBe(25);
});