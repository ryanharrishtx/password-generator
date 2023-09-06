// Character Sets
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*_+';

// querySelector looks for an element with an ID of generate
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button where on "click" of element with ID of generate (set up above to the variable generateBtn), the function will run
generateBtn.addEventListener("click", function start() {
// Prompt user to choose a password length between 8 and 128 characters
let passwordLength = prompt(`Please choose a password length between 8 and 128 characters.`);
// If password length is between 8 and 128 characters, then ask user if they would like to include lowercase letters, uppercase letters, numbers, and/or special characters

if (passwordLength >= 8 && passwordLength <= 128) {
  let includeLowerCase = confirm(`Would you like to include lowercase letters?`);
  let includeUpperCase = confirm(`Would you like to include uppercase letters?`);
  let includeNumbers = confirm(`Would you like to include numbers?`);
  let includeSpecialCharacters = confirm(`Would you like to include special characters?`);

// set up passwordCharacters variable to be an empty array
  let passwordCharacters = [];
// if user chooses to include any of the below, then add the values inside of their respective arrays to passwordCharacters array

  if (includeLowerCase) {
    passwordCharacters += lowerCase;
  }
  if (includeUpperCase) {
    passwordCharacters += upperCase;
  }
  if (includeNumbers) {
    passwordCharacters += numbers;
  }
  if (includeSpecialCharacters) {
    passwordCharacters += specialCharacters;
  }
//   if user does not choose any of the above, then alert them to choose at least one character type and run the start function again
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
    alert(`Please choose at least one character type.`);
    start();
  }

// set password variable to be an empty string
  let password = ``;
// for loop that runs for the length of the password, and each time it runs, it adds a random character from the passwordCharacters array to the password variable
  for (let i = 0; i < passwordLength; i++) {
    password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
// set the text content of the element with ID of password to be the password variable
  document.getElementById(`password`).textContent = password;
// if user does not choose a password length between 8 and 128 characters, then alert them to choose a password length between 8 and 128 characters
} else {
  alert(`Please choose a password length between 8 and 128 characters.`);
  start();
}
});