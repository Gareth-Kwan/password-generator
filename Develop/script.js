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
var finalPassword = "";

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
  } else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {
    password = lowercase.concat(uppercase, number, special);

    // User chooses 3 out of 4 options
  } else if (confirmLowercase && confirmUppercase && confirmNumber) {
    password = lowercase.concat(uppercase, number);
  } else if (confirmLowercase && confirmUppercase && confirmSpecial) {
    password = lowercase.concat(uppercase, special);
  } else if (confirmLowercase && confirmNumber && confirmSpecial) {
    password = lowercase.concat(number, special);
  } else if (confirmUppercase && confirmNumber && confirmSpecial) {
    password = uppercase.concat(number, special);
  }

  // User chooses 2 out of 4 options
  else if (confirmLowercase && confirmUppercase) {
    password = lowercase.concat(uppercase);
    console.log(password);
  } else if (confirmLowercase && confirmNumber) {
    password = lowercase.concat(number);
  } else if (confirmNumber && confirmUppercase) {
    password = number.concat(uppercase);
  } else if (confirmLowercase && confirmSpecial) {
    password = lowercase.concat(special);
  } else if (confirmSpecial && confirmUppercase) {
    password = special.concat(uppercase);
  } else if (confirmNumber && confirmSpecial) {
    password = number.concat(special);
  }

  // User chooses 1 out of 4 options
  else if (confirmLowercase) {
    password = lowercase;
  } else if (confirmUppercase) {
    password = uppercase;
  } else if (confirmNumber) {
    password = number;
  } else if (confirmSpecial) {
    password = special;
  }

  for (var i = 0; i < passlength.length; i++) {
    finalPassword = password[Math.floor(Math.random() * passlength.length)];
  }

  function UserInput() {
    document.getElementById("password").textContent = finalPassword;
  }
  UserInput();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
