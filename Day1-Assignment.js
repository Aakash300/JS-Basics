// ====================  VARIOUS METHODS IN CONSOLE FUNCTION ===================

console.log(['a','b','c']);// this is console.log which prints a,b,c variables in log .
console.info({a:1,b:2,c:3});// this is console.info which prints a,b,c variables in log. 
console.warn("Hello this is my warning");// this is console.warn which logs warning messages. 
console.error("Hello this is my error");// this is console.error which logs error messages. 
console.clear();//this is console.clear which is used to clear the console.
console.time('time:'); //this is console.time which is used to shows time taken by the code to execute. 
for(let i=0;i<5;i++){ 
    console.count(i); // this is console.count which is used to count the number which is iterated by loop.
} 
console.table({'a':1, 'b':2});// this is console.table which allows gives the output in the table format in console.
console.timeEnd('time:'); // this time and timeEnd should have same label inside to get the time taken by code output.

// this below code is group and groupEnd this is similar to time as it should have same label to group the contents which is in between group and group end. 
console.group('group-1'); 
console.warn('warning!'); 
console.error('error here'); 
console.log('Hello this is group-1'); 
console.groupEnd('group-1'); 

console.log('%c custom message','color:blue;') // this code gives customized message with color blue in the log.


// ======================= DIFFERENCES IN LET,VAR AND CONST ========================

// var can be redeclared and updated. but let can be updated but not redeclared.

/* let number = 30;
   let number = 40 ;   */
// This above let will throw an error in console as number is repeated in let . so for this we need to update number outside the let.

let number = 40;
number = 50 ;
console.log("Updated let number :"+ number);// this will print updated number in log.

//==================== SCOPE OF VARIABLE let and var ==============================

// let will not give any error if the same variable is declared again but it will take the global variable as output.

/* let points = 50;
let winner = false;
if(points > 40) {
  let winner = true;
}
console.log(winner); */

// Here in the above code we will get winner as the false instead of true because it takes global let value as output.

// Now here we will take var instead of let for winner.

let points = 50;
var winner = false;
if(points > 40) {
  var winner = true;
} 
console.log("Scope of variable winneer:" + winner);
// here we are getting winner as true as var can be scoped locally and globally.

//================== DIFFERENCE BETWEEN let and const ==============================

// const variables cannot be updated but let variables can be updated.

// If I define the const variable:
const key = 'xyz123';
// Then try to redeclare it:
//key = 'xyz1234'
//this key above will get the following error:
//Uncaught TypeError: Assignment to constant variable.

// Creating my person object:
const person = {
    name: 'AKASH',
    age: 23
  }
// this is decalred using const.
console.log(person);
console.log(person.age);
// here we will change the age to 22.
person.age=22;
console.log(person);
// we can see that the age changed to 22 in object datatype.
// but when we use froze the value of any field then its value cannot be changed.
const AKASH = Object.freeze(person);
// now lets try to change age to 23 which is original.
person.age = 23; 
// now if we call person age then we will get 22 instead of 23 as latest value is taken.
console.log(person);
// as we can see the original value was 23 but it is now 22.

// ====================== SUMMARY OF DIFFERENCE BETWEEN var, let and const ==================

// here we can see that var changes its value to the latest as it can be redeclared and updated.
// lets can be updated but not redeclared.
// const cannot be updated and redeclared in some datatypes.
// const can be updated in object and array but cannot be redeclared. 


// ======================== VARIOUS DATA TYPES IN JAVASCRIPT ==========================

// STRING DATA TYPE :

var a = 'Hi this is a';  // using single quotes
var b = "Hi this is b";  // using double quotes
console.log({a,b});

// NUMBER DATA TYPE :

var a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000 or  4.25*1000000
var d = 4.25e-6;    // exponential notation, same as 0.00000425 or  4.25 / 1000000
console.log({a,b,c,d});

// BOOLEAN DATA TYPE :

var isReading = true;   // yes, I'm reading
var isSleeping = false; // no, I'm not sleeping
console.log({isReading,isSleeping});


// UNDEFINED DATA TYPE :

var a;
var b = "Hello World!";
console.log(a); // This will give result as undefined datatype.
console.log(b); // This will give result as Hello World!.

// NULL DATA TYPE :

var a = null;
console.log(a); // This will give result as Null.

// OBJECT DATA TYPE :

var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}
console.log(car); // This will give result in object form.

// ARRAY DATA TYPE :

var cities = ["London", "Paris", "New York"];
console.log(cities); // This will give result in array form.

// FUNCTION DATA TYPE :

var greeting = function(){ 
    return "Hello World!"; 
}
console.log(greeting); // This will give result from function block of code.


// TYPEOF OPERATOR :

console.log(typeof 2.5e-4);  // Returns: "number"
console.log(typeof Infinity);  // Returns: "number"
console.log(typeof NaN);  // Returns: "number". Despite being "Not-A-Number"
console.log(typeof 'hello');  // Returns: "string"
console.log(typeof true);  // Returns: "boolean"
console.log(typeof undefined);  // Returns: "undefined"
console.log(typeof Null);  // Returns: "object"
console.log(typeof {name: "John", age: 18});  // Returns: "object"
console.log(typeof [1, 2, 4]);  // Returns: "object"
console.log(typeof function(){});  // Returns: "function"
