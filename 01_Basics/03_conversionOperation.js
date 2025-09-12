let score = 33
let scoreStr = "33"

console.log( typeof score) 
console.log( typeof(scoreStr))

// conversion operation
// 1. number to string
let newScore = String(score)
console.log( typeof newScore)

// 2. string to number
let newScoreStr = Number(scoreStr)
console.log( typeof newScoreStr)

scoreStr = "33abc"
newScoreStr = Number(scoreStr)
console.log( typeof newScoreStr) // number
console.log(newScoreStr) // NaN => Not a Number

// 3. null to number
let num = null
console.log( typeof num) // object
let newNum = Number(num)
console.log( typeof newNum) // number
console.log(newNum) // 0

// 4. boolean to number
let isLoggedIn = false
console.log( typeof isLoggedIn) // boolean
let newIsLoggedIn = Number(isLoggedIn)
console.log( typeof newIsLoggedIn) // number
console.log(newIsLoggedIn) // 0

// 5. Number to boolean
let isLoggedIn2 = 1
console.log( typeof isLoggedIn2) // number
let newIsLoggedIn2 = Boolean(isLoggedIn2)
console.log( typeof newIsLoggedIn2) // boolean
console.log(newIsLoggedIn2) // true

// 6. String to boolean
let isLoggedIn3 = "false"
let isLoggedIn4 = ""
console.log( typeof isLoggedIn3) // string
let newIsLoggedIn3 = Boolean(isLoggedIn3)
let newIsLoggedIn4 = Boolean(isLoggedIn4)
console.log( typeof newIsLoggedIn3) // boolean
console.log(newIsLoggedIn3) // true
console.log(newIsLoggedIn4) // false

// 7. Undefined to number
let undef = undefined
console.log( typeof undef) // undefined
let newUndef = Number(undef)
console.log( typeof newUndef) // number
console.log(newUndef) // NaN

