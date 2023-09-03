// Character Sets
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*_+';

// querySelector looks for an element with an ID of generate
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button where on "click" of element with ID of generate (set up above to the variable generateBtn), the function will run
generateBtn.addEventListener("click", function() {
// Prompt user to choose a password length between 8 and 128 characters
let passwordLength = prompt(`Please choose a password length between 8 and 128 characters.`);

// If password length is between 8 and 128 characters, then ask user if they would like to include lowercase letters, uppercase letters, numbers, and/or special characters
if (passwordLength >= 8 && passwordLength <= 128) {
    let includeLowerCase = confirm(`Would you like to include lowercase letters?`);
    let includeUpperCase = confirm(`Would you like to include uppercase letters?`);
    let includeNumbers = confirm(`Would you like to include numbers?`);
    let includeSpecialCharacters = confirm(`Would you like to include special characters?`);
}
});
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);