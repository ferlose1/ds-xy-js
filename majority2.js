var a = [], x, g = 0, n = 0, count = 1, stp = 0;
for (x = 0; x < 5; x++) {
  a[x] = Math.floor(Math.random() * (4 - 1) + 1)
}
a.sort()
console.log(a)
m = Math.floor(a.length / 2)
do {
  for (i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1]) {
      count++
      g = count
      n = a[i]
    } else {
      count = 1
      if (g > count) {
        stp = g
      }
    }
  }
} while (stp < g)

if (g > m) {
  console.log(n + " Es el numero mayoritario")
}
else {
  console.log("No hay numero mayoritario")
}