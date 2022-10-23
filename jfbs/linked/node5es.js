export { Linked, Node }

import Node from './node.js'

//
// imports ES5
// Node (Node4stu5es.js)
//

function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}

function getHead() { return this.head }

function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let c = this.head, contain
  while (c) {
    if (v == c.data) {
      contain = c.data
    }
    c = c.next
  }
  if (v == contain) {
    return contain
  } else {
    return false
  }
}
function getTail() {
  let c = this.head, tail
  while (c) {
    tail = c.data
    c = c.next
  }
  return tail
}

function InsertAfter(valor,despues){
  let c = this.head,next
  while (c) {
    if(despues==c.data){
      next=c.next
      c.next=valor
      valor.next=next
    }
    c = c.next
  }
}
function InsertBefore(valor, antes) {
  let c = this.head,previous,next
  if (c.next == null) {
    this.prepend(valor)
  } else {
    if (antes != this.head.data) {
      while (c) {
        if (antes != c.data) {
          previous = c
        } else {
          next = previous.next
          previous.next = valor
          valor.next = next
        }
        c = c.next
      }
    } else {
      this.prepend(valor)
    }
  }
}