let obj = {}

for (var i = 0; i <= 10000; i++) {
  let name = 'name' + (1 + Math.floor(Math.random() * 10000))
  obj[name] = name
}
console.log(obj)
//console.log(Object.entries(obj))
//console.log(Object.keys(obj))
console.log(Object.values(obj).length)
