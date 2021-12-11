// Assignment Code
var generateBtn = document.querySelector("#generate");

// Show password prompts
function passwordPrompts() {
   // prompt for password length (8-128 characters)
   var passwordLength = prompt("What is the length of the password");
   // prompt for uppercase, lowercase, numeric, special characters
   var passwordfCharacters = prompt("Would you like to include uppercase, lowercase, numeric or special characters?");

   return [passwordLength, passwordfCharacters];
}

// Generate a password
function generatePassword() {
  // set local variables with values originating from the passwordPrompts function
  promptValues = passwordPrompts();
  console.log(promptValues);
  passwordLength = promptValues[0];
  passwordCharacters = promptValues[1];
  console.log(passwordLength);
  console.log(passwordCharacters);

  // Check that the password is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("Password is too long, try again.")
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
