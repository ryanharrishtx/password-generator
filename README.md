# Password Generator
This is a password generator built using HTML, CSS, and Javascript. When you press the "Generate Password" button, you will be prompted to enter a password length value between 8 and 128 characters. You are then asked if you would like to include lowercase letters, uppercase letters, numbers, or special characters. The program then takes this user input and stores the appropriate characters in a passwordCharacters array and then runs a for loop that incorporates Math.floor and Math.random methods to generate a random password that it then prints in the text box. It uses error handling for if you enter a value for password length that is smaller than 8 or larger than 128 characters, it alerts you to choose a value within the range listed. Also, if you choose to not incorporate any of the possible character set criterias, then it alerts you to choose at least one and then reruns the prompts from the beginning. Below are the User Story and Acceptance Criteria:

## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

![screenshot of deployed portfolio](./assets/images/deployedscreenshot.jpeg)

## Link to Deployed Webpage
<a href="https://ryanharrishtx.github.io/week-1-challenge">Link</a>