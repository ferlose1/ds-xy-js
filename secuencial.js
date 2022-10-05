
function num1() {
    let array = []
    let cont=0;
    for (let i = 0; i <= 10e5; i++) {
      array[i] = (1 + Math.floor(Math.random() * 10e5))
    }
    secuencial = function(g){
    while(g>0){
    for (var i in array) {
      cont = cont+1 
      if (array[i] == g) {
        return "El numero buscado se encuentra en la posicion" + " " + i;
      }
      
    }
      return "El numero no se encuentra en el array";  
}
 } 
  let g = 5
  console.log(array)
  console.time()
  console.log(secuencial(g))
  console.timeEnd()
  console.log("Los pasos fueron de: ",cont)
}
console.log(num1())

function num2() {
    let array = []
    let cont=0;
    for (let i = 0; i <= 10e4; i++) {
      array[i] = (1 + Math.floor(Math.random() * 10e4))
    }
    secuencial = function(g){
    while(g>0){
    for (var i in array) {
      cont = cont+1 
      if (array[i] == g) {
        return "El numero buscado se encuentra en la posicion" + " " + i;
      }
      
    }
      return "El numero no se encuentra en el array";  
}
 } 
  let g = 5
  console.log(array)
  console.time()
  console.log(secuencial(g))
  console.timeEnd()
  console.log("Los pasos fueron de: ",cont)
}
console.log(num2())

function num3() {
    let array = []
    let cont=0;
    for (let i = 0; i <= 10e3; i++) {
      array[i] = (1 + Math.floor(Math.random() * 10e3))
    }
    secuencial = function(g){
    while(g>0){
    for (var i in array) {
      cont = cont+1 
      if (array[i] == g) {
        return "El numero buscado se encuentra en la posicion" + " " + i;
      }
      
    }
      return "El numero no se encuentra en el array";  
}
 } 
  let g = 5
  console.log(array)
  console.time()
  console.log(secuencial(g))
  console.timeEnd()
  console.log("Los pasos fueron de: ",cont)
}
console.log(num3())