export function sum() {}
export function difference() {}

import { sum, difference } from './functions.js'

import {
    sum as add,
    difference as subtract
  } from './functions.js'
  
  add(1, 2) // 3

  import * as mathFunctions from './functions.js'

mathFunctions.sum(1, 2) // 3
mathFunctions.difference(10, 3) // 7

// Primitive values
export const number = 100
export const string = 'string'
export const undef = undefined
export const empty = null
export const obj = { name: 'Homer' }
export const array = ['Bart', 'Lisa', 'Maggie']

// Function expression
export const sum = (x, y) => x + y

// Function definition
export function difference(x, y) {
  return x - y
}

// Asynchronous function
export async function getBooks() {}

// Class
export class Book {
  constructor(name, author) {
    this.name = name
    this.author = author
  }
}

// Instantiated class
export const book = new Book('Lord of the Rings', 'J. R. R. Tolkien')

export default function sum(x, y) {
    return x + y
  }

  import sum from './functions.js'

sum(1, 2) // 3

import difference from './functions.js'

difference(1, 2) // 3

export default {
    name: 'Lord of the Rings',
    author: 'J. R. R. Tolkien',
  }


  import book from './functions.js'

  export default () => 'This function is anonymous'

  import anonymousFunction from './functions.js'

  export const length = 10
export const width = 5

export default function perimeter(x, y) {
  return 2 * (x + y)
}

import calculatePerimeter, { length, width } from './functions.js'

calculatePerimeter(length, width) // 30