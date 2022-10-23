import { Linked, Node } from '../../../../jfbs/linked/node5es.js'

let n1 = new Node('a')
let n2 = new Node('b')

let list = new Linked(n1)
list.append(n2)
list.append(new Node('c'))
list.traverse(list.getHead())

list.InsertAfter(new Node('f'), 'b')
list.traverse(list.getHead())

list.InsertBefore(new Node('e'), 'b')
list.traverse(list.getHead())