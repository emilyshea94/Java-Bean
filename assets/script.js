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
  var chars = ""; 
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz" ;
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numeric) chars += "0123456789"
    if (special) chars +="!@#$%^&*()_+=-,<>./?\|;:'~`";
//add alert to let gues know to meet password requirements
    if (!chars || length <8 || >128) {
      alert ("Please select valid criteria (length between 8 and 128, and at least one speical character and one uppercase letter).");
      return "";
    }

//var password? trying out math  
// dont forget to use . when using a variable
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex= Math.floor (Math.random() *charset.length);
  password += chars[randomIndex];
}

return password;

//function and query selector repeated again here. remember to use var
//dont forget semicolons this time!!
function writePassword() {
  var password= writePassword();
  var passwordText = document.querySelector("passsword");
  passwordText.value = password;
}

      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
