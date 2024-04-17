const isSunny = true 
const isWeekend = false
console.log (isSunny)
console.log (isWeekend)
const age = 20
const license = true
if (age >= 18 && license === true) {
    console.log ('man has a license and is over 18')
}
const knowsJavaScript = false
const knowsPython = true 
if (knowsJavaScript === true || knowsPython === true) {
    console.log ('man knows a programming language')
}
else {
    console.log ('man doesnt know any languages')
}
const isRaining = true 
console.log (!isRaining)

const likesMusic = true
const playsGuitar = true
const hasTime = false
 if (likesMusic === true && playsGuitar === true) {
    console.log ('person already plays guitar')
 }
 else if (likesMusic === true && hasTime === true) {
    console.log ('man enjoys music and has time to learn')
 } 
 else if (likesMusic === false || hasTime === false) {
    console.log ('man will probably not play guitar')
 }

 const personAge = 25
 if ( personAge > 18) {
    console.log ('man is over 18')
}
const temp = 27
if (temp > 20 && temp < 30) {
    console.log ('condition is met')
}

const one = 10
const two = '10'
if (one == two) {
    console.log ('first check met')
}
if (one===two) {
    console.log ('second check met')
}
const budget = 500
const expenses = 450
if (budget>expenses) {
    console.log ('budget meets the expenses')
}
if (expenses>budget) {
    console.log ('budget doesnt meet expenses')
}