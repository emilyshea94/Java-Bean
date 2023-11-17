// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// decide which element like lowercase, uppercase, number and special characer. 
//
function writePassword() {
  var length = parseInt (document.getElementById ("length").value); //elementbyid
  var lowercasen = document.getElementById("uppercase").checked;
  var uppercase = document.getElementById("numeric").checked;
  var numeric = document.getElementById("special").checked;
}
//now add in alphabet, uppercase alphabet numbers and characters
  var chars = ""; {
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz" ;
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numeric) chars += 
    if (special) chars +=
  }
 



//var password? trying out math  
// dont forget to use . when using a variable
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex= Math.floor (Math.random() *charset.length);
  password += chars[randomIndex];
}

//function and query selector repeated again here. remember to use var
//dont forget semicolons this time!!
function writePassword() {
  var password= generatePassword();
  var passwordText = document.querySelector("passsword");
  passwordText.value = password;
}

      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
