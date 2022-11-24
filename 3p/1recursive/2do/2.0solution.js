function n_fib(x) {
  if (x < 2)
    return x;
  else
    return n_fib(x - 1) + n_fib(x - 2);
}
function fibonacci(n) {
  for (let i = 1; i <= n; i++) {
    console.log(n_fib(i));
  }
}

function potencia(x, n) {
  let resultado = 1;
  if (n === 0)
    return resultado
  resultado = x
  resultado = resultado * potencia(x, n - 1)
  return resultado
}
function factorial(x) {
  let f = x
  if (x === 0 || x === 1)
    return 1
  f = f * factorial(x - 1)
  return f
}
console.log('Serie Fibonacci:')
fibonacci(5)
console.log('Potencia:' + potencia(2, 3))
console.log('Factorial:' + factorial(3))