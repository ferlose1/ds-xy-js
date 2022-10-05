let obj = {};
let obj2 = {};

for (x = 1; x <= 10e3; x++) {
  let n = (1 + Math.floor(Math.random() * 10e3))
  obj[n] = n
}
Objs = Object.keys(obj)
for (i = 0; i < Objs.length; i++) {
  name = "name:"
  obj2[name + Objs[i]] = name + Objs[i]
}

console.log(obj2)
