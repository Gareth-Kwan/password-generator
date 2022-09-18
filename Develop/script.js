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

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  var input = prompt("Please choose a length of at least 8 characters and no more than 128 characters.");
  if (!input) {
    alert("Please enter a value.");
  } else if (input < 8 || input > 128) {
    input = alert("Please choose a length between 8 and 128!");
    return;
  }
  var confirmLowercase = confirm("Do you want to include lowercase letters in your password?");
  var confirmUppercase = confirm("Do you want to include uppercase letters in your password?");
  var confirmNumber = confirm("Do you want to include numbers in your password?");
  var confirmSpecial = confirm("Do you want to include special characters in your password?");

  // User declined all options
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    choice = alert("Please choose one of the previous options.");

    // User accepts all options
  } else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {
    choice;

    // User accepts 3 out of 4 options
  } else if (confirmLowercase && confirmUppercase && confirmNumber) {
  } else if (confirmLowercase && confirmUppercase && confirmSpecial) {
  } else if (confirmLowercase && confirmNumber && confirmSpecial) {
  } else if (confirmUppercase && confirmNumber && confirmNumber) {
  }

  // User accepts 2 out of 4 options
  else if (confirmLowercase && confirmUppercase) {
  } else if (confirmLowercase && confirmNumber) {
  } else if (confirmNumber && confirmUppercase) {
  } else if (confirmLowercase && confirmSpecial) {
  } else if (confirmSpecial && confirmUppercase) {
  } else if (confirmNumber && confirmNumber) {
  }

  // User accepts 1 out of 4 options
  else if (confirmLowercase) {
  } else if (confirmUppercase) {
  } else if (confirmNumber) {
  } else if (confirmSpecial) {
  }

  // else if  {
  //   for (var i = 0; i < input.length; i++) {
  //     var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  //     password.push(pickChoices);
  //   }
  // }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
