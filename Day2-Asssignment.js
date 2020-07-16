console.log("Day-2 Assignment"); // for checking log working or not.

//==================== JS Code to Take Input from the user and log it in console =============

let bike = (prompt("Which Bike Do you have","Ducati 989"));
console.log(bike); // this will print the input taken from the user and if he click on ok ducato 989 will be printed in the log.


//======================= METHODS OF STRING =========================

// Finding the length of a string .(lenght Method)

let Car = 'Ferrari';
console.log(Car.length); // this will print the lenght of characters in word in this case it is "7".

// Retrieving a specific string character

console.log(Car[0]); // this will print the specific string character in this case it is "F" 

console.log(Car[Car.length-1]); // this will get the last character in this case it is "i" as character position is 6 but lenght is 7 . So here lenght-1 will give position 6.  

// Finding a substring inside a string and extracting it (indexOF Method)

let Bike = "Ducati"
console.log(Bike.indexOf('cat')); // this will print "2" as the "c" letter starts at index 2.
console.log(Bike.indexOf('b')); // this will print "-1" as there no letter "b".


// Slice Method (slice Method)

console.log(Bike.slice(0,3)); // this will print letters between 0 to 3.here it is "Duc"
console.log(Bike.slice(4)); // this will print letters after 4.here it is "ti"

// Changing case (toLowerCase Method and toUpperCase Method)

let Name = 'My Name is Akash';
console.log(Name.toLowerCase()); // this will print all letters in lowercase.
console.log(Name.toUpperCase()); // this will print all letters in Uppercase.

// Replacing parts of a string (replace Method)

let str = "good";
console.log(str.replace('g','f')); // this will replace g with f and will print "food" insted of "good" .

// Last Occurance of a string (lastIndexOf Method)
var str1 = "Please locate where 'locate' occurs!";
var pos = str1.lastIndexOf("locate"); 
console.log(pos); // this will return the postion 21 as there are 2 postion one is at 7 and other at 21 .So it will take last position which is 21.

// Returning the postion of a string (search Method)
var pos1 = str1.search("locate");
console.log(pos1); // this will give the return the position 7 as locate starts at position 7.

// Substring Method
var string = "Apple, Banana, Kiwi";
var result = string.substr(7, 6);
console.log(result); // this will print Banana as it starts from position 7 and 6 is the the lenght to be extracted.

// Substr Method
var fruits = "Apple, Banana, Kiwi";
var res = fruits.substr(7);
console.log(res); // this will print all the characters after the position 7 . this will print Banana, Kiwi.

// Concat Method
var a = "Hello"
var b = "Thank You"
var c = a.concat(""+",",b);
console.log(c); // this will attach the two strings together in this case it is Hello,Thank You.

// Trim Method
var sen = "       Hello World!        ";
console.log(sen.trim()); // this method will remove all the blank spaces between the character.

// charAt Method
var quo = "HELLO WORLD";
console.log(quo.charAt(0)); // this will return and print the character at poition 0 which is "H".

// charCodeAt() Method
var quo1 = "HELLO WORLD";
console.log(quo1.charCodeAt(0)); // this will returns and print the unicode of the characters which is "72".

// split() Method
var txt = "abcde";        
console.log(txt.split("")); // this split method will convert string into an array.


//=========================== ARRAY METHODS IN JAVASCRIPT =========================


// toString Method
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.toString()); // this method will convert all the arrray elements into string.

// join Method
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.join(" * ")); // this method is similar to toString method and as it converts array into string in addition to it has seprator.

// pop Method
var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.pop());// Removes the last element ("Mango") from fruits3 array list.

// push Method
var fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.push("Kiwi")); // This push adds ("kiwi") the element to the array list.

// shift Method
var fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.shift()); // Removes the first element "Banana" from fruits

// unshift Method
var fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6.unshift("Lemon")); // returns and print 5 as there is 5 elements in array list.

// Adding and changing
var fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7[0] = "Kiwi"); // Changes the first element of fruits to "Kiwi"
console.log(fruits7); // As we can check here.

// Slice Method
var fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8.splice(2, 0, "Lemon", "Kiwi"));// 2 defines where elemenrs should be added and 0 defines how many elemnets need to be removed.
console.log(fruits8);// here we can see the list in log.

// Concat Method
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); // Concatenates (joins) myGirls and myBoys
console.log(myChildren); // this will add two arrays myGirls and myBoys together.

// Merging three arrays using Concat Method.
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren1 = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3
console.log(myChildren1); // this will add all array together as one array.

//Merging array with values.
var arra1 = ["Emil", "Tobias", "Linus"];
var myChildren2 = arra1.concat("Peter"); 
console.log(myChildren2); // this will add "Peter" to the complete array list.



// ============================= IF - Else Example ==============================

let user = prompt("What is your Age ?");
console.log(user);
if (user < 21) {
  console.log("Cannot Drink");
} else {
   console.log("Can Drink");
}


