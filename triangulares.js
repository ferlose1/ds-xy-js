function triangulares(x) {
  let tri = []
  for (let i = 0; i < x; i++) {
    tri[i] = (i * (i + 1) / 2)
  }
  return tri
}
let x = 12
console.log(triangulares(x))