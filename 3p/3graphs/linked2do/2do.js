//
// design node (object) for a  
// weighted graph incidence list 
// 

let grafo = {
  A: [1, 0, 0, 1, 1, 0, 0],
  B: [0, 1, 1, 0, 1, 1, 1],
  C: [1, 1, 0, 0, 0, 1, 0],
  D: [0, 0, 1, 1, 0, 0, 1],
}

function Peso(obj, nodo) {
  let peso = 0, i;
  for (i = 0; i < obj[nodo].length; i++) {
    peso = peso + (obj[nodo])[i]
  }
  console.log(peso)
}

Peso(grafo, 'B')