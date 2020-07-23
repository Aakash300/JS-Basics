console.log("Day6-Assignment");

// =============================== QUESTION-1 =========================================


var bg = document.querySelector('.bg');
var colours = ["#800000","#FFFF00","#808000","#00FF00","#008000","#FF0000","#CCCDFF", "#BAC7E8", "#D9EEFF", "#BADFE8","#00FFFF","#008080","#0000FF","#000080","#FF00FF","#800080"];
var index = 0; // Will keep track of which color to use

function change() {
  // If we have run out of colors, stop the timer
  if(index >= colours.length){ clearInterval(timer); }
  
  // Set the color and increment the index
  bg.style.backgroundColor = colours[index++];
}

// Start the timer but get a reference to it 
// so we can stop it later
var timer = setInterval(change, 5000); 


// =============================== QUESTION-2 =========================================
   
  let input = prompt("Enter a number to See tables");
  let tables = document.getElementById('tables'); 


 for (let i = 1; i<=10; i++) {
     tables.innerHTML += `${input} X ${i} = ${input*i} <br>`
 }



// =============================== QUESTION-3 =========================================

//printing user input name in webpage
let message = document.getElementById('msg');

let name = prompt("Enter your name","Anonymous");

message.innerHTML = `Hello ! ${name}, Welcome to the webpage`;

const ctime = document.getElementById('clock');

//clock
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerHTML = time; 
}
setInterval(clock,1000);

// darkmode
let button = document.getElementById('darkmode');

button.onclick = function() {
   document.body.style.backgroundColor="black";
   document.body.style.color="white";
}

// toggle works some times and some time it doesnt work.
