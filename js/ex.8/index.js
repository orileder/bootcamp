const num1 = 8
const num2 = 15
const sum = num1 + num2 
console.log (sum)
const a = 30
const b = 12
const sum2 = a-b
console.log(sum2)
const mult = a*b 
console.log(mult)
const dividend = 20
const divisor = 4
const quot = dividend/divisor
console.log(quot)
const number1 = 15
const number2 = 25
const number3 = 10
const avg = (number1 + number2 + number3)/3
console.log(avg)
//% divides a number without leaving fractions. it gives only the remainder as a number
const x = 14
console.log (x%3)

const check = 7
if (check%2 === 0) {
    console.log('number is even')
}
else {
    console.log ('number is odd')
}

const check2 = 70
if (check2%5===0 && check2%7===0) {
    console.log ('number is diivisible by both 5 and 7')
}
else {
    console.log ('number isnt divisible by both 5 and 7')
}

for (let index = 0; index < 21; index++) {
   if (index%4===0 && index!==0) {
    console.log(index)
   };
    
}
const check3 = 11
if (check3 < 20 && check3 > 10) {
    console.log ('number is greater than 10 and smaller than 20')
    }
    else {
        console.log ('number is not')
    }
    const check4 = 3
if (check4 < -5 || check4 > 10) {
    console.log ('number satisfies the condition')
    }
    else {
        console.log ('number does not')
    }

    const boolval = false 
    if (boolval){
    console.log(!boolval)}
    else {
        console.log(!boolval)
    }


    const check5 = 21
    if (check5 > 5 && check5 < 10 || check5 > 20 && check5 < 30) {
        console.log ('number satisfies the condition')
        }
        else {
            console.log ('number does not')
        }
    