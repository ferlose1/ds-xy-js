function fila() {
  this.tamaño = []
  this.top = 5
  this.enfilar = enfilar
  this.desfilar = desfilar
  this.estalleno = estalleno
  this.estavacia = estavacia
  this.imprimir = imprimir

  function enfilar(x) {
    if (this.estalleno() != true) {
      this.tamaño.push(x)
    } else {
      console.log("esta llena la fila")
    }
  }
  function desfilar() {
    if (this.estavacia() != true) {
      this.tamaño.shift()
    } else {
      console.log("esta vacia la fila")
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
}

let cola = new fila()

cola.enfilar(1)
cola.enfilar(2)
cola.enfilar(3)
cola.enfilar(4)
cola.enfilar(5)
cola.enfilar(6)
console.log(cola.imprimir())
cola.desfilar()
console.log(cola.imprimir())
cola.desfilar()
cola.desfilar()
cola.desfilar()
cola.desfilar()
cola.desfilar()