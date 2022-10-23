function stack(top) {
  this.tamaño = []
  this.top = top
  this.push = push
  this.pop = pop
  this.empty = empty
  this.full = full
  this.show = show
  this.peek = peek

  function push(element) {
    if (this.full()) {
      console.log("llena")
    } else {
      this.tamaño.unshift(element)
    }
  }

  function pop() {
    if (this.empty()) {
      console.log("vacia")
    }
    else {
      return this.tamaño.shift()
    }
  }

  function full() {
    if (this.tamaño.length === this.top)
      return true
    else
      return false
  }

  function empty() {
    if (this.tamaño.length === 0)
      return true
    else
      return false
  }

  function show() {
    let show = ""
    for (let i = 0; i < this.tamaño.length; ++i) {
      show += this.tamaño[i] + "\n"
    }
    return show
  }

  function peek() {
    return this.tamaño[0]
  }
}
var pasos = [0, 0, 0, 0, 0]
var tiempo = [0, 0, 0, 0, 0]
function ordenar(x) {
  for (let ciclo = 0; ciclo <= 4; ciclo++) {
    let pila1 = new stack(x)
    let pila2 = new stack(x)
    var inicio = Date.now()
    let alt1, alt2
    alt1 = Math.floor(Math.random() * (x - 1) + 1)

    let i = 1;
    pila1.push(alt1)

    while (i < x) {
      while (!pila2.empty()) {
        pila1.push(pila2.pop())
        pasos[ciclo] = pasos[ciclo] + 1
      }
      alt2 = Math.floor(Math.random() * (x - 1) + 1)
      while (alt2 <= pila1.peek() && !pila1.empty()) {
        pila2.push(pila1.pop())
        pasos[ciclo] = pasos[ciclo] + 1
      }
      if (alt2 >= pila1.peek() || pila1.empty()) {
        pila1.push(alt2)
        pasos[ciclo] = pasos[ciclo] + 1
      }
      i++
    }
    while (!pila2.empty()) {
      pila1.push(pila2.pop())
    }
    var fin = Date.now()
    console.log(pila1.show())
    console.log("pasos en ciclo: " + (ciclo + 1) + " son: " + pasos[ciclo])
    tiempo[ciclo] = fin - inicio
    console.log("tiempo en el ciclo: " + (ciclo + 1) + " es: " + tiempo[ciclo] + "ms")
  }
}
let t, p
ordenar(10)
p = pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4]
t = tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4]
console.log("total de pasos: " + p)
console.log("total de tiempo: " + t)
console.log("promedio de pasos: " + p / 5)
console.log("promedio de tiempo: " + t / 5)
ordenar(100)
p = pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4]
t = tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4]
console.log("total de pasos: " + p)
console.log("total de tiempo: " + t)
console.log("promedio de pasos: " + p / 5)
console.log("promedio de tiempo: " + t / 5)
ordenar(1000)
p = pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4]
t = tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4]
console.log("total de pasos: " + p)
console.log("total de tiempo: " + t)
console.log("promedio de pasos: " + p / 5)
console.log("promedio de tiempo: " + t / 5)