// write your code below!

var name = "Janet:"
var height = 74

console.log("Name:")
console.log(name)

console.log("Height:")
console.log(height+1)

var a = 5, b = 2, c = 3, d = "hello", e = "goodbye"

function doNothing() {}

doNothing()

function sayHello() {
  console.log('Hello!')
}

sayHello()

function sayHelloToIsabel() {
  console.log('Hello, Isabel!')
}

function sayHelloToSofia() {
  console.log('Hello, Sofia!')
}

function sayHelloToBrendan() {
  console.log('Hello, Brendan!')
}

sayHelloToIsabel()
sayHelloToSofia()
sayHelloToBrendan()

function doSomething(thing) {
  console.log(thing)
}

doSomething('anything')

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
}

sayHelloTo('Isabel') // "Hello, Isabel!"
sayHelloTo('Jane') // "Hello, Jane!"
sayHelloTo('R2-D2') // "Hello, R2-D2!"
sayHelloTo(1) // "Hello, 1!"

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`)
}

say("Goodbye", "Julio")

say("Julio", "Goodbye")

// Wrong command in lesson below?

function add(x, y) {
  console.log(x + y)
}

add(1, 2)


if (100 === (903 + 10)) {
  console.log("100 is equal to itself.")
} else {
  console.log("Your equation is incorrect.")
}

var Virginia = "crush"

if (Virginia === "co-worker") {
  console.log("Focusing on work.")
} else {
  console.log("Flirting with Virginia.")
}
