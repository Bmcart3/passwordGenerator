// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //selects box
  var passwordText = document.querySelector("#password");
  //updates the box
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  //These are the variables that will house the arrays for all of the possible characters.
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "~"];
  var arraysCombined = [];
  var passwordSelect = "";

  //Asks the user how many characters and then converts it to an integer. Alerts user if they select a number that is not authorized.
  var userLength = parseInt(prompt("How many characters would you like in your password? Must be between 8 and 128."));
  if (userLength < 8 || userLength > 128) {
    alert("Please select a number between 8 and 128.");
  }

  //Include uppercase characters? If so add it to the arraysCombined array.
  if (confirm("Would you like uppercase characters included in your password? OK for yes.")) {
    arraysCombined.push(upperCase);
  }
  
  //Include lowercase characters? If so add it to the arraysCombined array.
  if (confirm("Would you like lowercase characters included in your password? OK for yes.")) {
    arraysCombined.push(lowerCase);
  }

  //Include numbers? If so add it to the arraysCombined array.
  if (confirm("Would you like numbers included in your password? OK for yes.")) {
    arraysCombined.push(numbers);
  }

  //Include special characters? If so add it to the arraysCombined array.
  if (confirm("Would you like special characters included in your password? OK for yes.")) {
    arraysCombined.push(specials);
  }

  //Tells the user they have to at least have one category of characters selected for a password to be generated.
  if (arraysCombined.length == 0) {
    confirm("You must select OK for at least one category of characters!")
  }

  //Loops as many times as the user wants characters.
  //
  for (var i = 0; i < userLength; i++) {
    //selection will be equal to a random array within arraysCombined
    var selection = arraysCombined[Math.floor(Math.random() * arraysCombined.length)];
    //randomSelected will be equal to a random index within selection.
    var randomSelected = selection[Math.floor(Math.random() * selection.length)];
    //adds the randomly selected value to the empty string passwordSelect
    passwordSelect += randomSelected;
  }
  
  return(passwordSelect);
}



