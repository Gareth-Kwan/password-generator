// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// var uppercase = function (upper) {
//   return upper.toUpperCase(lowercase);
// };
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "/",
  ":",
  "<",
  "=",
  ">",
  "?",
  "[",
  "]",
  "_",
  "{",
  "|",
  "}",
  "^",
];
var password;

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var finalPassword = [];
  var passLength = "";

  // User inputs the password length and confirms the options for the password
  //Option #1 - While Loop option, didn't quite work out :(
  // while (passLength.length == 0 || parseInt(passLength) < 8 || parseInt(passLength) > 128) {
  //   passLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters.");
  //   //Break out of the loop when you press esc
  //   if (passLength === null) {
  //     break;
  //   }
  // }
  // passLength = parseInt(passLength);
  // if (passLength == null) {
  //   return;
  // }
  //Option #2 - Used a simple prompt declaration to inquire user's password length
  var passLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters.");
  if (passLength == null) {
    return;
  }
  // Verify if the password length is acceptable
  if (!passLength) {
    alert("Please enter a value.");
  } else if (passLength < 8 || passLength > 128) {
    passLength = alert("Please choose a length between 8 and 128!");
    return;
  }
  // Confirm the rest of the requirements for the password
  var confirmLowercase = confirm("Do you want to include lowercase letters in your password?");
  var confirmUppercase = confirm("Do you want to include uppercase letters in your password?");
  var confirmNumber = confirm("Do you want to include numbers in your password?");
  var confirmSpecial = confirm("Do you want to include special characters in your password?");

  // User declined all options
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    password = alert("Please choose one of the previous options.");

    // User chooses all options
  }
  if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {
    password = lowercase.concat(uppercase, number, special);

    // User chooses 3 out of 4 options
  }
  if (confirmLowercase && confirmUppercase && confirmNumber && !confirmSpecial) {
    password = lowercase.concat(uppercase, number);
  }
  if (confirmLowercase && confirmUppercase && confirmSpecial && !confirmNumber) {
    password = lowercase.concat(uppercase, special);
  }
  if (confirmLowercase && confirmNumber && confirmSpecial && !confirmUppercase) {
    password = lowercase.concat(number, special);
  }
  if (confirmUppercase && confirmNumber && confirmSpecial && !confirmLowercase) {
    password = uppercase.concat(number, special);
  }

  // User chooses 2 out of 4 options
  if (confirmLowercase && confirmUppercase && !confirmNumber && !confirmSpecial) {
    password = lowercase.concat(uppercase);
  }
  if (confirmLowercase && confirmNumber && !confirmUppercase && !confirmSpecial) {
    password = lowercase.concat(number);
  }
  if (confirmNumber && confirmUppercase && !confirmLowercase && !confirmSpecial) {
    password = number.concat(uppercase);
  }
  if (confirmLowercase && confirmSpecial && !confirmUppercase && !confirmNumber) {
    password = lowercase.concat(special);
  }
  if (confirmSpecial && confirmUppercase && !confirmLowercase && !confirmNumber) {
    password = special.concat(uppercase);
  }
  if (confirmNumber && confirmSpecial && !confirmUppercase && !confirmLowercase) {
    password = number.concat(special);
  }

  // User chooses 1 out of 4 options
  if (confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    password = lowercase;
  }
  if (confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecial) {
    password = uppercase;
  }
  if (confirmNumber && !confirmUppercase && !confirmLowercase && !confirmSpecial) {
    password = number;
  }
  if (confirmSpecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    password = special;
  }

  //Used a for loop to generate a password according to the length of the password using the concatenated string from above options
  for (var i = 0; i < parseInt(passLength); i++) {
    finalPassword[i] = password[Math.floor(Math.random() * parseInt(password.length))];
  }
  //Used a function to write the password generated above in the text area in HTML.
  function UserInput() {
    document.getElementById("password").textContent = finalPassword.join("");
  }
  UserInput();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
