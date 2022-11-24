function Node(o) {
  this.d = o//bject<->data
  this.l = null//eft
  this.r = null//ight
  this.ll = null
  this.lr = null
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)
let q1 = new Node(2)
let q2 = new Node(7)

p.l = o1
p.r = o2
p.ll = q1
p.lr = q2

preorder(p)
