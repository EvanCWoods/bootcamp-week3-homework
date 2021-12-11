// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactersAlphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r", 
  "s", "t", "u", "v", "w", "x", "y", "z"
];
var charactersNumerical = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9",
]
var charactersSpecial = [
  "!", "@", "#", "$", "%", "^", "&", "*", 
  "(", ")", "'", "+", ",", "-", ".", "/", ":", 
  ";", "<", ">", "=", "?", "[", "]", "_", "`", 
  "|","{", "}", "~"
]

password = [];

// Show password prompts
function passwordPrompts() {
   // prompt for password length (8-128 characters)
   var passwordLength = prompt("What is the length of the password");
   // prompt for uppercase, lowercase, numeric, special characters
   var includeUppercase = prompt("Would you like to include uppercase characters?").toUpperCase();
   var includeLowercase = prompt("Would you like to include lowercase characters?").toUpperCase();
   var includeNumerical = prompt("Would you like to include numerical characters?").toUpperCase();
   var includeSpecial = prompt("Would you like to include special characters?").toUpperCase();

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
  // Create a new array to join the characters to
  var characterSelectors = charactersAlphabet;

  // set local variables with values originating from the passwordPrompts function
  promptValues = passwordPrompts();
  passwordLength = promptValues[0];
  includeUppercase = promptValues[1];
  includeLowercase = promptValues[2];
  includeNumerical = promptValues[3];
  includeSpecial = promptValues[4];
  
  // Check for upper case
  if (includeUppercase === "Y" && includeLowercase !== "Y") {   // if only uppercase is selected, change the entire array to uppercase
    for (var i=0; i<charactersAlphabet.length; i++) {
      charactersAlphabet[i] = charactersAlphabet[i].toUpperCase()
    }
  } else if (includeUppercase === "Y" && includeLowercase === "Y") {    // Select random index in the alphabet array to make uppercase
    for (var i=0; i<charactersAlphabet.length / 2; i++) {
      charactersAlphabet[
        Math.floor(Math.random() * charactersAlphabet.length)
      ] = charactersAlphabet[
        Math.floor(Math.random() * charactersAlphabet.length)
      ].toUpperCase();
    }
  }
  // Check that the password inludes numerical
  if (includeNumerical === "Y") {
    characterSelectors = characterSelectors.concat(charactersNumerical);
    console.log(characterSelectors);
  }
  // Check that the password inludes special
  if (includeSpecial === "Y") {
    characterSelectors = characterSelectors.concat(charactersSpecial);
    console.log(characterSelectors);
  }


  // Check that the password is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Password is not between 8 and 128 characters, try again.");
  } else {
    for (var i=0; i<passwordLength;  i++) {   // Create a password with of the specified length
      password.push(characterSelectors[Math.round(Math.random() * characterSelectors.length)]);   // populate an array with the characters that are randomly selected from the give narray fo choices (charactersAlphabet)
      console.log();
    }
  } 
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
