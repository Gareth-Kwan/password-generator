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
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  " < ",
  "=",
  " > ",
  " ? ",
  "[",
  "]",
  "_",
  "{",
  "|",
  "}",
  " ^ ",
];
var password;
var finalPassword = [];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

  // User inputs the password length and confirms the options for the password
  var passlength = prompt("Please choose a length of at least 8 characters and no more than 128 characters.");
  // Verify if the password length is acceptable
  if (!passlength) {
    alert("Please enter a value.");
  } else if (passlength < 8 || passlength > 128) {
    passlength = alert("Please choose a length between 8 and 128!");
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
    console.log(password);

    // User chooses 3 out of 4 options
  }
  if (confirmLowercase && confirmUppercase && confirmNumber && !confirmSpecial) {
    password = lowercase.concat(uppercase, number);
    console.log(password);
  }
  if (confirmLowercase && confirmUppercase && confirmSpecial && !confirmNumber) {
    password = lowercase.concat(uppercase, special);
    console.log(password);
  }
  if (confirmLowercase && confirmNumber && confirmSpecial && !confirmUppercase) {
    password = lowercase.concat(number, special);
    console.log(password);
  }
  if (confirmUppercase && confirmNumber && confirmSpecial && !confirmLowercase) {
    password = uppercase.concat(number, special);
    console.log(password);
  }

  // User chooses 2 out of 4 options
  if (confirmLowercase && confirmUppercase && !confirmNumber && !confirmSpecial) {
    password = lowercase.concat(uppercase);
    console.log(password);
  }
  if (confirmLowercase && confirmNumber && !confirmUppercase && !confirmSpecial) {
    password = lowercase.concat(number);
    console.log(password);
  }
  if (confirmNumber && confirmUppercase && !confirmLowercase && !confirmSpecial) {
    password = number.concat(uppercase);
    console.log(password);
  }
  if (confirmLowercase && confirmSpecial && !confirmUppercase && !confirmNumber) {
    password = lowercase.concat(special);
    console.log(password);
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

  for (var i = 0; i < parseInt(passlength); i++) {
    finalPassword[i] = password[Math.floor(Math.random() * parseInt(passlength))];
  }
  function UserInput() {
    document.getElementById("password").textContent = finalPassword.join("");
  }
  UserInput();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
