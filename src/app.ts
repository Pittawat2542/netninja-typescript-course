// const anchor = document.querySelector('a')!

// // if (anchor)
// console.log(anchor.href)

// interface IsPerson {
//     name: string
//     age: number
//     speak(a: string): void
//     spend(a: number): number
// }

// const me: IsPerson = {
//     name: 'shuan',
//     age: 30,
//     speak(text: string) {
//         console.log(text)
//     },
//     spend(amount: number) {
//         console.log(`I spent, ${amount}`)
//         return amount
//     }
// }

// console.log(me)

// const greetPerson =(person: IsPerson) => console.log(`Hello ${person.name}`)


import Invoice from './models/Invoice.js'
import HasFormatter from './interfaces/HasFormatter.js'
import Payment from './models/Payment.js'
import ListTemplate from './models/ListTemplate.js'

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

// const invoiceOne = new Invoice('mario', 'work on the mario website', 250)
// const invoiceTwo = new Invoice('luigi', 'work on the luigi website', 350)

// let invoices: Invoice[] = []
// invoices.push(invoiceOne)
// invoices.push(invoiceTwo)

// invoices.forEach(invoice => console.log(invoice.format()))

// const form = document.querySelector('.new-item-form') as HTMLFormElement
const form = document.querySelector('form')!

// console.log(form.children)

const typeInput = document.querySelector('#type') as HTMLSelectElement
const toFromInput = document.querySelector('#tofrom') as HTMLInputElement
const detailsInput = document.querySelector('#details') as HTMLInputElement
const amountInput = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', e => {
    e.preventDefault()

    let values: [string, string, number] = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber]

    let doc: HasFormatter
    if (typeInput.value === 'invoice') doc = new Invoice(...values)
    else doc = new Payment(...values)

    list.render(doc, typeInput.value, 'end')
})

// -----------------------------------

// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100)
//     return {...obj, uid}
// }

// let docOne = addUID({name: 'luigi', age: 40})
// // let docTwo = addUID('hello')

// console.log(docOne.name)

// interface Resource<T> {
//     uid: number
//     resourceName: string
//     data: T
// }

// const docThree: Resource<{name: string}> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {
//         name: 'shaun'
//     }
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['milk', 'egg']
// }

// -----------------------------------

// enum ResouceType {
//     BOOK, AUTHOR, FILM, DIRECTOR, PERSON
// }

// interface Resource<T> {
//     uid: number,
//     resourceType: ResouceType,
//     data: T
// }

// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResouceType.PERSON,
//     data: {
//         title: 'name of the woind'
//     }
// }

// -----------------------------------

// let arr = ['ryu', 25, true]

// let tup: [string, number, boolean] = ['ryu', 25, true]