// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbChar = '0123456789';
var symbChar = '!@#$%^&*()_+-={}[]./';

function generatePassword() {
    var finalPassword = "";
    var userChoice = "";

    var length = parseInt(prompt("Enter a password length between 8-128 characters."));

    if (!length) {
        alert("Sorry, input must be a number");
        return "";
    } else if (length < 8 || length > 129) {
        alert("Sorry, please put in a number between 8-128");
        return "";
    }

    var lowercase = confirm("Would you like to include lowercase letters?");
    if (lowercase === true) {
        userChoice += lowerChar;
    }
    var uppercase = confirm("Would you like to include uppercase letters?");
    if (uppercase === true) {
        userChoice += upperChar;
    }
    var numbers = confirm("Would you like to include numbers?");
    if (numbers === true) {
        userChoice += numbChar;
    }
    var special = confirm("Would you like to include special characters?");
    if (special === true) {
        userChoice += symbChar;
    }
    if (lowercase === false && uppercase === false && numbers === false && special === false) {
        alert("You must choose at least one element");
        return "";
    }
    for (var i = 0; i <= length; i++) {
        var randomNumber = userChoice[Math.floor(Math.random() * userChoice.length)]
        finalPassword += randomNumber;
    }
    return finalPassword;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);