console.log("Day3-Assignment");

// =============================== Question - 1 ===================================== 


let num = prompt("Enter a Number !");
console.log("The number entered is "+num+ ` ${(num%2==0 ? "and Number is Even":"and Number is Odd")}`);
// the above code is using ternary operator.


let number = prompt("Enter a Number !");
if (number%2==0) {
    console.log("The number entered is "+number+" and Number is Even");
} else {
    console.log("The number entered is "+number+" and Number is Odd");
}
// the above code is using if and else condition. 


let numbers = prompt("Enter a Number !");
switch (numbers%2==0) {
    case true:
        console.log("The Number entered is "+numbers+" and Number is Even");
        break;

    default:
        console.log("The Number entered is "+numbers+" and Number is Odd");
        break;
}
// the above code is using switch condition.


// ================================ Question-2 ===================================



let OS = prompt("Enter a OS Name with version ! ");
let arr = OS.split(' '); // split string on comma space
console.log(`The OS name is ${arr[0]} and version is ${arr[1]}`);
// the above code will get the desired output .



// ================================= Question-3 ==================================


let Marks = Number(prompt("Enter Marks to Find the Grade !! "));
if (Marks >= 90) {
    console.log("Marks are 90 and Grade is A+");
} 
else if(Marks < 90 && Marks>= 75) {
    console.log("Marks are between 75 to 89 and Grade is A");
}
else if(Marks < 75 && Marks>=60){
     console.log("Marks are between 74 to 60 and Grade is B+");
}
else if (Marks == 50) {
    console.log("Marks are 50 and Grade is B");
}
else{
    console.log("Marks are below 50 and Grade is C");
}
// the above code is using if and else condition.


let marks = Number(prompt("Enter Marks to Find the Grade !! "));
console.log( (marks>=90) ? "Marks are 90 and Grade is A+": (marks < 90 && marks>= 75) ? "Marks are between 75 to 89 and Grade is A" : (marks < 75 && marks>=60) ? "Marks are between 74 to 60 and Grade is B+" : (marks == 50) ? "Marks are 50 and Grade is B" : "Marks are below 50 and Grade is C" );
// the above code is using ternary operator.



let marks1 = Number(prompt("Enter Marks to Find the Grade !! "));
switch (marks1) {
    case 90:
        console.log("Marks are 90 and Grade is A+");
        break;
    case 80:
        console.log("Marks are 90 and Grade is A");
    case 70 :
        console.log("Marks are 70 and Grade is B+");
        break;
    case 60 :
        console.log("Marks are 60 and Grade is B+");
        break;
    case 50:
        console.log("Marks are 50 and Grade is B");
        break;
    default:
        console.log("Marks are below 50 and Grade is C");
        break;
}
// The above code is using Switch Case. 


