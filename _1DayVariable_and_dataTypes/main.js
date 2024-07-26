// Activity 1: Variable decalration

// Task 1: Declare a variable using var,  assign it the a number,and log the value to the console
// Task 2: Declare a variable using let,assign it the a string,and log the value to the console

let age = 10
console.log(age)

let name = "suraj"
console.log(name)

// Activity 2: Constant decalration

// Task 3: Declare a variable using const,  assign it a boolean value,and log the value to the console
const male = true

console.log(male)

// Activity 3: Constant decalration

// Task 4: Create variables of different data types (number,string,boolean,aobject,array) and log each operator
const num = 10
const department = "any"
const start = true
const student = {name:"suraj",age:20}
const colors = ["red","pink","cyan"]

console.log(num,department,start,student,colors)

// Activity 4:Data Types 

// Task 5: Declare a variable using let,  assign it an initial value, ressign a new value ,and log the both value to the console
let gender = "male"
console.log(gender)
gender = "female"
console.log(gender)

// Activity 5:Unswrstanding Const 

// Task 6: Try reassinging a variable declared with const and observe the error

const person = "dignata"
// person = "raj"
// Gives error
/*
Uncaught TypeError TypeError: Assignment to constant variable.
    at <anonymous> (c:\Users\suraj\OneDrive\Desktop\chai-code\_1DayVariable_and_dataTypes\main.js:43:8)
    at Module._compile (internal/modules/cjs/loader:1369:14)
    at Module._extensions..js (internal/modules/cjs/loader:1427:10)
    at Module.load (internal/modules/cjs/loader:1206:32)
    at Module._load (internal/modules/cjs/loader:1022:12)
    at executeUserEntryPoint (internal/modules/run_main:135:12)
    at <anonymous> (internal/main/run_main_module:28:49)
    */