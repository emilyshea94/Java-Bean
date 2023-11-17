// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText= document.getElementsByName ("password")
  var charLength= window.prompt (password )
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//8-128 characers, letters and symbols
//try out math? 
function generatePassword() {
  var length = 8-,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}


      // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
