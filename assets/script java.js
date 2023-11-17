// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = 

}
//var password? trying out math  
// dont forget to use . when using a variable
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex + Math.floor (Math.random() *charset.length);
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
