const myAge = 29
// This tells the engine "I wish for there to be a variable named myAge, and I wish its value to  be 29"
var earlyYears = 2
// This tells the engine "I wish for there to be a variable named earlyYears, and I wish for its value to be 2"
earlyYears *= 10.5
var laterYears = (myAge - 2)
// This tells the engine "I wish for there to be a variable named laterYears, and I wish its value to be the value of myAge minus two"
laterYears *= 4
// This tells the engine "Multiply the value of laterYears by four and display the product as the new value of laterYears"
const myAgeInDogYears = (earlyYears + laterYears)
// This tells the engine " I wish for there to be a variable named myAgeInDogYears, and I wish its value to be the sum of earlyYears and laterYears"
const myName = 'Devon'.toLowerCase()
// This tells the engine "I wish for there to be a variable named myName, and I want it's value to be "Devon" but I wish for every letter in that string to be lowercased.""
console.log(`my name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)
