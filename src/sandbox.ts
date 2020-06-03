// const character = 'luigi';

// console.log(character);

// const inputs = document.querySelectorAll('input');

// console.log(inputs);

// inputs.forEach(input => console.log(input))

//----------------------------------------------

// let character = 'mario'
// let age = 30
// let isBlackBelt = false

// // character = 20
// character = 'luigi'

// // age = 'yoshi'
// age = 40

// // isBlackBelt = 'yes'
// isBlackBelt = true

// const circ = (diameter: number) => diameter * Math.PI * 2;

// console.log(circ(7.5))

//----------------------------------------------

// let names = ['luigi', 'mario', 'yoshi']

// // names = 'names'

// names.push('toad')
// // names.push(3)
// // names[0] = 3

// let numbers = [10, 20, 30, 40]

// numbers.push(25)
// // numbers.push('shuan')
// // numbers[1] = 'shuan'

// let mixed = ['ken', 4, 'chun-li', 8, 9]

// mixed.push('ryu')
// mixed.push(10)
// mixed[0] = 3

// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }

// ninja.age = 40
// ninja.name = 'ryu'
// // ninja.age = '30'
// // ninja.skills = ['fighting', 'sneaking']

// // ninja = ''

// ninja = {
//     name: 'yoshi',
//     belt: 'ornage',
//     age: 40
// }

//----------------------------------------------

// let character: string
// let age: number
// let isLoggedIn: boolean

// // age = 'luigi'
// age = 30

// // isLoggedIn  = 25
// isLoggedIn = true

// let ninjas: string[] = []

// ninjas.push('shuan')

// // ninjas = [10, 23]
// ninjas = ['yoshi', 'shuan']

// let mixed: (string | number | boolean)[] = []
// mixed.push('hello')
// mixed.push(20)
// mixed.push(false)
// console.log(mixed)

// let uid: string | number
// uid = '123'
// uid = 123

// let ninjaOne: object
// ninjaOne = { name: 'yoshi', age: 30 }
// ninjaOne = []

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor: string
// }

// ninjaTwo = {
//     name: 'mario',
//     age: 20,
//     beltColor: 'black'
// }

//----------------------------------------------

// let age: any = 25

// age = true
// console.log(age)
// age = 'hello'
// console.log(age)
// age = {name: 'luigi'}
// console.log(age)

// let mixed: any[] = []

// mixed.push(5)
// mixed.push('mario')
// mixed.push(false)
// console.log(mixed)

// let ninja: {name: any, age: any}

// ninja = {name: 'yoshi', age: 25}
// console.log(ninja)

// ninja = {name: 25, age: 'yoshi'}
// console.log(ninja)

//----------------------------------------------

// // let greet = () => {
// //     console.log('Hello, world')
// // }

// let greet: Function

// // const add = (a: number, b: number, c?: number | string) => {
// const add = (a: number, b: number, c: number | string = 10) => {
//     console.log(a + b)
//     console.log(c)
// }

// add(5, 10)
// add(5, 10, '20')

// // const minus = (a: number, b: number): number => a + b
// const minus = (a: number, b: number) => a + b

// let result = minus(10, 7)

//----------------------------------------------

// type StringOrNumber = string | number
// type UserObject = { name: string, uid: StringOrNumber }

// const logDetails = (uid: StringOrNumber, item: string) => console.log(`${item} has uid of ${uid}`)

// const greet = (user: UserObject) => console.log(`${user.name} says hello`)

//----------------------------------------------

// let greet: Function

let greet: (a: string, b: string) => void
greet = (name: string, greeting: string) => console.log(`${name} says ${greeting}`)

let calc: (a: number, b: number, c: string) => number
calc = (numOne: number, numTwo: number, action: string) => action == 'add' ? numOne + numTwo : numOne - numTwo

type Person = {name: string, age: number}

let logDetails: (obj: Person) => void
logDetails = (ninja: Person) => console.log(`${ninja.name} is ${ninja.age} years old`)