function primo(numero) {
  for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
    if (numero % i === 0) return false;
  return numero > 1;
}
for (let x = 0; x <= 30; x++) {
  if (primo(x))
    console.log(x);
}