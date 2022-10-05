function num1() {
  let array = []
  let contador = 0;
  for (var i = 0; i <= 10e5; i++) {
    array[i] = (1 + Math.floor(Math.random() * 10e5))
  }
  function up(a, b) {
    return a - b
  }

  binarySearch = function(item) {
    array.sort(up)
    let low = 0,
      high = array.length - 1,
      mid, element
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = array[mid]
      if (element < item) {
        low = mid + 1
      } else if (element > item) {
        high = mid - 1
      } else {
        return mid
      }
      contador = contador + 1
    }
    return -1

  }
  console.log(array.sort(up))
  let x = 5
  console.time()
  console.log(binarySearch(x))
  console.timeEnd()
  console.log("Los pasos fueron:",contador)
}
console.log(num1())

function num2() {
  let array = []
  let contador = 0;
  for (var i = 0; i <= 10e4; i++) {
    array[i] = (1 + Math.floor(Math.random() * 10e4))
  }
  function up(a, b) {
    return a - b
  }

  binarySearch = function(item) {
    array.sort(up)
    let low = 0,
      high = array.length - 1,
      mid, element
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = array[mid]
      if (element < item) {
        low = mid + 1
      } else if (element > item) {
        high = mid - 1
      } else {
        return mid
      }
      contador = contador + 1
    }
    return -1

  }
  console.log(array.sort(up))
  let x = 5
  console.time()
  console.log(binarySearch(x))
  console.timeEnd()
  console.log("Los pasos fueron:",contador)
}
console.log(num2())

function num3() {
  let array = []
  let contador = 0;
  for (var i = 0; i <= 10e3; i++) {
    array[i] = (1 + Math.floor(Math.random() * 10e3))
  }
  function up(a, b) {
    return a - b
  }

  binarySearch = function(item) {
    array.sort(up)
    let low = 0,
      high = array.length - 1,
      mid, element
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = array[mid]
      if (element < item) {
        low = mid + 1
      } else if (element > item) {
        high = mid - 1
      } else {
        return mid
      }
      contador = contador + 1
    }
    return -1

  }
  console.log(array.sort(up))
  let x = 5
  console.time()
  console.log(binarySearch(x))
  console.timeEnd()
  console.log("Los pasos fueron:",contador)
}
console.log(num3())