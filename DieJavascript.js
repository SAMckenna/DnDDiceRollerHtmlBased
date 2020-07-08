var amountOfDie = 1;//number of times to roll a die when using multiple die roll functions
var maxCustomDie = 2;//min number the custom die can roll
var minCustomDie = 1;//max value the custom die can roll
var output;//where to send the results of the die rolls
var inNumberOfDie;//input for number of die to roll
var inMaxCustomDie;//input for the max value the custom die can roll
var inMinCustomDie;//input for the min number the custom die can roll

//generates a number between min and max inclusive, upto 16 digits.
function getRandomInteger(min, max){
   return Math.floor(( Math.random() * (max - min + 1)) + min);
}

//generates a number based on a fair 4 side dice.
function rollD4(){
   return getRandomInteger(1, 4);
}

//generates a number based on a fair 6 side dice.
function rollD6(){
   return getRandomInteger(1, 6);
}

//generates a number based on a fair 8 side dice.
function rollD8(){
   return getRandomInteger(1, 8);
}

//generates a number based on a fair 10 side dice.
function rollD10(){
   return getRandomInteger(1, 10);
}

//generates a number based on a fair 12 side dice.
function rollD12(){
   return getRandomInteger(1, 12);
}

//generates a number based on a fair 20 side dice.
function rollD20(){
   return getRandomInteger(1, 20);
}

//generates a number based on a fair 100 side dice.
function rollD100(){
   return getRandomInteger(1, 100);
}

//generates a number between 2 user set numbers.
function rollCustomD(){
   return getRandomInteger(minCustomDie, maxCustomDie);
}

//empties the output of the screen of all internal html
function clearOutput(){
  output.innerHTML = "";
}

//rolls a number of d4's upto the amount specified
function rollMultipleD4(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	result.push(rollD4());
 };
return result;
}

//rolls a number of d6's upto the amount specified
function rollMultipleD6(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	 result.push(rollD6());
 };
return result;
}

//rolls a number of d8's upto the amount specified
function rollMultipleD8(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	 result.push(rollD8());
 };
return result; 
}

//rolls a number of d10's upto the amount specified
function rollMultipleD10(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	 result.push(rollD10());
 };
return result;
}

//rolls a number of d12's upto the amount specified
function rollMultipleD12(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	 result.push(rollD12());
 };
return result;
}

//rolls a number of d20's upto the amount specified
function rollMultipleD20(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	 result.push(rollD20());
 };
return result;
}

//rolls a number of d100's upto the amount specified
function rollMultipleD100(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	 result.push(rollD100());
 };
return result;
}

//rolls a number of custom die upto the amount specified.
function rollMultipleCustomD(amount){
var result = [];
for(var rollNumber = 0; rollNumber < amount; rollNumber++){	
	 result.push(rollCustomD());
 };
return result;
}

//rolls the die corrosponding to the type given. type is defined as the number of faces or custom.
function rollMultipleDie(type){
 if(type == 4){
  output.innerHTML += " D4: ";
  output.innerHTML += rollMultipleD4(amountOfDie).join(", ");
 }
 else if(type == 6){
  output.innerHTML += " D6: ";
  output.innerHTML += rollMultipleD6(amountOfDie).join(", ");
 }
 else if(type == 8){
  output.innerHTML += " D8: ";
  output.innerHTML += rollMultipleD8(amountOfDie).join(", ");
 }
 else if(type == 10){
  output.innerHTML += " D10: ";
  output.innerHTML += rollMultipleD10(amountOfDie).join(", ");
 }
 else if(type == 12){
  output.innerHTML += " D12: ";
  output.innerHTML += rollMultipleD12(amountOfDie).join(", ");
 }
 else if(type == 20){
  output.innerHTML += " Die20: ";
  output.innerHTML += rollMultipleD20(amountOfDie).join(", ");
 }
 else if(type == 100){
  output.innerHTML += " D100: ";
  output.innerHTML += rollMultipleD100(amountOfDie).join(", ");
 }
 else if(type == "Custom"){
  output.innerHTML += " Custom Die("+ minCustomDie + ", " + maxCustomDie +"): ";
  output.innerHTML += rollMultipleCustomD(amountOfDie).join(", ");
 }
 else{
return output.innerHTML = "The selected options are not currently supported";
 }
}

//sets the amount of die to roll
function setAmount(){
 amountOfDie = inNumberOfDie.value;
}

//sets the max value that the custom die can roll
function setMaxCustomDie(){
 maxCustomDie = inMaxCustomDie.value;
}

//sets the min value that the custom die can roll
function setMinCustomDie(){
 minCustomDie = inMinCustomDie.value;
}

//intialises all variables that require the page to be loaded, to avoid runtime errors
window.onload = function(){
  output = document.getElementById("output");
  inNumberOfDie = document.getElementById("numberOfDie");
  inMaxCustomDie = document.getElementById("inMaxCustomDie");
  inMinCustomDie = document.getElementById("inMinCustomDie");
}
