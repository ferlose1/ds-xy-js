var a = [], distancia = 0, b = [], n = 0, count = 0;

for (i = 0; i < 5; i++) {
  a[i] = (1 + Math.floor(Math.random() * 5))
}
console.log(a);
m = Math.floor(a.length / 2)
for (i = 0; i < 5; i++) {
  b[i] = 0;
}
v = 1;
do {
  for (i = 0; i < a.length; i++) {
    if (v == a[i]) {
      b[v - 1] += 1
    }
  }
  v++;
} while (v < 5);
for (i = 0; i < b.length; i++) {
  if (b[i] >= count) {
    count = b[i];
    n = i + 1;
  }
}
if (count > m) {
  console.log(n + " Es el numero mayoritario")
}
else {
  console.log("No hay numero mayoritario")
}