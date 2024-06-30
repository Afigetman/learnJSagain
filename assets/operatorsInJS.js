"use strict";

console.log('arr' + " - object");
console.log(4 + "object");
console.log(4 + +"object");
console.log(4 + "5");
console.log(4 + +"5");

//Increment and Decrement
let incr = 10,
    decr = 10;

// incr++;//POSTFICSNYJE SNACHALA VOZRASCHAJET STAROJE ZNACHJENIJE A POTOM UVELICHIVAJET
// decr--;

// ++incr;//PREFICSNYJE  SNACHALA UVELICHIVAJET STAROJE ZNACHJENIJE A POTOM VOZVRASCHAJET
// --decr;

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

//OSTATOK OT DJELJENIJA

console.log(5 % 2);//1

let a = 1;//PRISVAIVANIJE
console.log(4 * 2 == '8');//SRAVNJENIJE
console.log(4 * 2 === '8');//STROGOJE SRAVNJENIJE PO TIPAM ZNACHENIJ

//OPERATORY SRAVNENIA && - I, || - ILI

const isChecked = true;
const isClose = true;// change at false

//console.log(isChecked && isClose);
console.log(isChecked || isClose);
//operator otricania ! menaet true na false, a esli != eto est' neravenstvo
console.log(2 + 2 * 2 != 8);//true
