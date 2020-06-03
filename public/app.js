// const anchor = document.querySelector('a')!
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
import Invoice from './models/Invoice.js';
import Payment from './models/Payment.js';
import ListTemplate from './models/ListTemplate.js';
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
var form = document.querySelector('form');
// console.log(form.children)
var typeInput = document.querySelector('#type');
var toFromInput = document.querySelector('#tofrom');
var detailsInput = document.querySelector('#details');
var amountInput = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber];
    var doc;
    if (typeInput.value === 'invoice')
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
    else
        doc = new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
    list.render(doc, typeInput.value, 'end');
});
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
