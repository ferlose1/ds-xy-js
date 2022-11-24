function Node(o) {
  this.d = o
  this.l = null
  this.r = null
}
function preorder(n) {
  if (n) {
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}
function inorder(n) {
  if (n) {
    preorder(n.l)
    console.log(n.d)
    preorder(n.r)
  }
}
function posorder(n) {
  if (n) {
    preorder(n.l)
    preorder(n.r)
    console.log(n.d)
  }
}
let raiz = new Node('+')
let i = new Node(3)
let d = new Node('/')
raiz.l = i;
raiz.r = d;
i.l = new Node(2)
d.r = new Node(7)

preorder(raiz)
inorder(raiz)
posorder(raiz)