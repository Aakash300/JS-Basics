console.log("Day4-Assignment");

// ================================= Question-1 ===================================


for( i=0;i<=100;i++){
        if (i%3===0 && i%5===0){
            console.log("FIZZ AND BUZZ");
        }
        else if(i%3===0){
            console.log("FIZZ");
        }
        else if(i%5===0){
             console.log("BUZZ");
        }
        else {
            console.log(i);
        }
    }



// second type can be called inside a function
function fizzbuzz(){
    for( i=0;i<=100;i++){
        if (i%3===0 && i%5===0){
            console.log("FIZZ AND BUZZ");
        }
        else if(i%3===0){
            console.log("FIZZ");
        }
        else if(i%5===0){
             console.log("BUZZ");
        }
        else {
            console.log(i);
        }
    }
}


// ================================== Question-2 =================================== 
   
const student ={
    name: "helsinki",
    age:24,
    projects :{
    diceGame:"Two players playing dice game using Javascript"
    }
    }
    console.log("QUESTION-2");
    console.log(student.name);
    console.log(student.projects);

    // Destructuring Object
    const {name,age,projects:{diceGame}} = student;
    console.log(diceGame);//this will get dice game without placing student.diceGame 
    console.log(name,age);// this will get name,age wthout placing student.name and student.age 

// ================================== Question-3 =================================== 
      
   console.log("QUESTION-3");
   shoppingList = ["creals","pulses","snacks","soft drinks","ice cream","vegetables","fruits"];
   shoppingList.push("washing items","milk");
   console.log(shoppingList);
   shoppingBasket=[...shoppingList];
   shoppingBasket.push("rice","wheat");
   console.log(shoppingBasket);
   console.log(shoppingBasket);
   console.log(shoppingList);
   // As we can see that the shoppingBasket is a copy of shoppingList and the we have added some more elements to shoppingbBasket as we can see that the items added in the shopping Basket is not added to the shoppingList
   console.log(shoppingBasket);
   console.log(shoppingList);
   // As we can see when we push values in shoppingList it is adding the values to shoppingBasket but when we are pushing values in shoppingBasket it is not adding in shoppingList. 



// ================================== Question-4 =================================== 
  
console.log("QUESTION-4");
  function calculator(num1,num2,op){
   if(op=="+"){
      return console.log(num1+num2);
   }
   else if(op=="-"){
    return console.log(num1-num2);
   }
   else if(op=="*"){
    return console.log(num1*num2);
   }
   else if(op=="/"){
    return console.log(num1/num2);
   }
   else if(op=="**"){
    return console.log(num1**num2);
   }
   else if(op=="%"){
    return console.log(num1%num2);
   }
   else{
     console.log("Please enter two values and operator");
   }
  }

  calculator(34,23,"+");
  calculator(34,23,"-");
  calculator(34,23,"*");
  calculator(34,23,"/");
  calculator(2,8,"**");
  calculator(34,23,"%");
  calculator(55,45,"+");
  calculator();


// ================================== Question-5 =================================== 
  
    console.log("QUESTION-5");

    function salesReward(Name,sales,sal){
        if(sales <= 5000){
            console.log(`Reward for Sales from 0 to 5000 is 2% which is ${sal*2/100} for employee ${Name}.`);
        }
        else if(sales >= 5001 && sales <=10000){
            console.log(`Reward for Sales from 5001-10000 is 5% which is ${sal*5/100} for employee ${Name}.`);
        }
        else if(sales >= 10001 && sales <=20000 ){
            console.log(`Reward for Sales from 10001-20000 is 7% which is ${sal*7/100} for employee ${Name}.`);
        }
        else if(sales >20000 ){
            console.log(`Reward for Sales Above 20000 is 10% which is ${sal*10/100} for employee ${Name}.`);
        }
        else{
            console.log("Improve your sales");
        }
    }
   
    let emp = {
        Name : "Vishal",
        sales : 5000,
        sal : 20000,
    };
    let emp1 ={
        Name : "Rohit",
        sales :10000,
        sal : 18000,
    };
    let emp2 ={
        Name : "Prasad",
        sales :18000,
        sal : 23000,
    };
    let emp3 ={
        Name : "Akash",
        sales :200000,
        sal : 22000,
    };

    salesReward(emp.Name,emp.sales,emp.sal);
    salesReward(emp1.Name,emp1.sales,emp1.sal);
    salesReward(emp2.Name,emp2.sales,emp2.sal);
    salesReward(emp3.Name,emp3.sales,emp3.sal);

// ================================== Question-6 =================================== 

     console.log("QUESTION-6");

     var number = parseInt(prompt("Please enter a number from 1 to 100", ""));

     if (number < 100) {
         document.write("Your number (" + number + ") is matches requirements", "");
     } else if (isNaN(number)) {
         parseInt(prompt("It is not a number. Please enter a number from 1 to 100", ""));
     } else {
         parseInt(prompt("Your number (" + number + ") is above 100. Please enter a number from 1 to 100", ""));
     }



// ================================== Question-7 =================================== 
    
     console.log("QUESTION-7");

     function prime(n,flag) {
        ( typeof flag === "undefined" || flag === false ) ? flag = false : flag = true;
    
        function isPrime(num) {
            if ( num === 0 || num === 1 ) {
                return false;
            }
            for ( var i = 2; i < num; i++ ) {
                if ( num % i === 0 ) {
                    return false;
                }
            }
            return true;
        }
    
        if ( flag ) {
            var arr = [2];
            for ( var i = 3; i <= n; i+=2 ) {
                if ( isPrime(i) ) {
                    arr.push(i);
                }
            }
            return arr;
        } else {
            return isPrime(n);
        }
    }

    console.log(prime(100,true));
    console.log(prime(22));
    console.log(prime(1000,true));

// ================================== Question-8 =================================== 
     
    //  function ask (question,yes,no){
    //     if (confirm(question)) yes()
    //     else no();
    //     }
    //     ask("Do you agree ?",
    //     function(){alert("you agreed");},
    //     function(){alert("you canceled the execution .");}
    //     )

   let ask = (question,yes,no) => {
    if (confirm(question)) yes()
         else no();
         }
         ask("Do you agree ?",
         function(){alert("you agreed");},
         function(){alert("you canceled the execution .");}
         )
