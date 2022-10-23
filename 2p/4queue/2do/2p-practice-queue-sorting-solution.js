function fila(top) {
  this.tamaño = []
  this.top = top
  this.enfilar = enfilar
  this.desfilar = desfilar
  this.estalleno = estalleno
  this.estavacia = estavacia
  this.imprimir = imprimir
  this.peek = peek

  function enfilar(x) {
    if (this.estalleno()) {
      console.log("esta llena la fila")
    } else {
      this.tamaño.push(x)
    }
  }
  function desfilar() {
    if (this.estavacia()) {
      console.log("esta vacia la fila")
    } else {
      return this.tamaño.shift()
    }
  }
  function estalleno() {
    if (this.tamaño.length === this.top) {
      return true
    }
    else {
      return false
    }
  }
  function estavacia() {
    if (this.tamaño.length === 0) {
      return true
    }
    else {
      return false
    }
  }
  function imprimir() {
    let i = ""
    for (let j = 0; j < this.tamaño.length; j++) {
      i += this.tamaño[j] + "\n"
    }
    return i
  }
  function peek() {
    return this.tamaño[0]
  }
}

var pasos = [0, 0, 0, 0, 0]
var tiempo = [0, 0, 0, 0, 0]

function ordenar(x) {
  for (let ciclo = 0; ciclo <= 4; ciclo++) {
    let fila1 = new fila(x)
    let fila2 = new fila(x)
    var inicio = Date.now()
    let alt1, alt2
    let i = 1;

    alt1 = Math.floor(Math.random() * (x - 1) + 1)
    fila1.enfilar(alt1)
    while (i < x) {
      alt2 = Math.floor(Math.random() * (x - 1) + 1)

      while (fila1.estavacia() != true) {
        fila2.enfilar(fila1.desfilar())
        pasos[ciclo] = pasos[ciclo] + 1
      }
      while (alt2 > fila2.peek()) {
        fila1.enfilar(fila2.desfilar())
        pasos[ciclo] = pasos[ciclo] + 1
      }
      if (fila2.estavacia()) {
        fila1.enfilar(alt2)
        pasos[ciclo] = pasos[ciclo] + 1
      }
      if (alt2 <= fila2.peek()) {
        fila1.enfilar(alt2)
        pasos[ciclo] = pasos[ciclo] + 1
      }
      while (fila2.estavacia() != true) {
        fila1.enfilar(fila2.desfilar())
      }
      i++
    }
    var fin = Date.now()
    console.log(fila1.imprimir())
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