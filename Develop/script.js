// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of alphabetical cahracters
var charactersAlphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r", 
  "s", "t", "u", "v", "w", "x", "y", "z"
];

// Array of numerical characters
var charactersNumerical = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

// Array of special characters
var charactersSpecial = [
  "!", "@", "#", "$", "%", "^", "&", "*", 
  "(", ")", "'", "+", ",", "-", ".", "/", ":", 
  ";", "<", ">", "=", "?", "[", "]", "_", "`", 
  "|","{", "}", "~"
];

// Show password prompts
function passwordPrompts() {
   // prompt for password length (8-128 characters)
   var passwordLength = prompt("What is the length of the password");
   // prompt for uppercase, lowercase, numeric, special characters
   var includeUppercase = prompt("Would you like to include uppercase characters?").toUpperCase();
   var includeLowercase = prompt("Would you like to include lowercase characters?").toUpperCase();
   var includeNumerical = prompt("Would you like to include numerical characters?").toUpperCase();
   var includeSpecial = prompt("Would you like to include special characters?").toUpperCase();

  // Return an array of the values given by the user in the prompts
   return [   
    passwordLength, 
    includeUppercase, 
    includeLowercase, 
    includeNumerical, 
    includeSpecial
  ];
}

// Generate a password
function generatePassword() {
  //  create a password array to be populated with characaters
  password = [];

   // Create a new array to join the characters to
   var characterSelectors = charactersAlphabet;

   // set local variables with values originating from the passwordPrompts function
   promptValues = passwordPrompts();
   passwordLength = promptValues[0];
   includeUppercase = promptValues[1];
   includeLowercase = promptValues[2];
   includeNumerical = promptValues[3];
   includeSpecial = promptValues[4];


   // Check that the password is between 8 and 128 characters
   if (passwordLength < 8 || passwordLength > 128) {
    prompt("Password is not between 8 and 128 characters, try again.");   // handle error for password length
  } else {
    for (var i=0; i<passwordLength;  i++) {   // Create a password with of the specified length
      password.push(characterSelectors[Math.round(Math.random() * characterSelectors.length)]);   // populate an array with the characters that are randomly selected from the give narray fo choices (charactersAlphabet)
    }
  }
   
   // Check for upper case
  if (includeUppercase === "Y" && includeLowercase !== "Y") {
    for (var i=0; i<password.length; i++) {   // Loop through the entire password array
      password[i] = password[i].toUpperCase()   // at every index in the array, change the character to uppercase
    }
  }
  //  Check for both upper and lower case
   if (includeUppercase === "Y" && includeLowercase === "Y") {   // if only uppercase is selected, change the entire array to uppercase
    for (var i=0; i<Math.floor(password.length / 4); i++) {     // Loop through one quarter of the length of the password array
      upperCaseReplaceIndex = Math.floor(Math.random() * password.length);    // assign an index from the password length
      password[upperCaseReplaceIndex] = password[upperCaseReplaceIndex].toUpperCase();    // replace the index with an uppercase character
    }
  } 
   // Check that the password inludes numerical
   if (includeNumerical === "Y") {

    for (var i=0; i<Math.floor(password.length / 4); i++) {   // Loop through one quarter of the length of the password array
      numericalReplaceIndex = Math.floor(Math.random() * charactersNumerical.length);   // Assign an index from the numerical characters array
      PasswordReplaceIndex = Math.floor(Math.random() * password.length);   // assign an index in the password to replace with a numerical character
      password[PasswordReplaceIndex] = charactersNumerical[numericalReplaceIndex];    // replace the character with a numerical character 
    }
   }
   // Check that the password inludes special
   if (includeSpecial === "Y") {
    for (var i=0; i< password.length / 4; i++) {    // Loop through one quarter of the length of the password array
      specialReplaceIndex = Math.floor(Math.random() * charactersSpecial.length);   // assign an index from the special characters array
      PasswordReplaceIndex = Math.floor(Math.random() * password.length);   // assign an index from the password array
      password[PasswordReplaceIndex] = charactersSpecial[specialReplaceIndex];    // replace the password index with the special character at that index 
    }
   }
  return password.join("");   // Make the password a string instead of an array of single character strings
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);