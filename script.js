// Assignment Code
var generateBtn = document.querySelector("#generate");

// List possible characters 

var character = []
var lowercase = "abcdefghijknopqrstuvwxyz".split("");
var uppercase = "AACDEFGHJKLMNPQRSTUVWXYZ".split("");
var numbers = "012345679".split("");
var special = "!@$<&*?>}{".split("");
var password= ""

//Function to ask user questions and Generate password

function generatePassword() {
  var passwordLength = prompt("Please specify how many characters you want in your password")
      if (passwordLength < 8 || passwordLength >128) {
        alert ("Password must be between 8 and 128 characters. Please try again.");
        return;
      }
  var lowercaseconfirm = confirm ("Do you want your password to contain lowercase letters?");
      if (lowercaseconfirm){
        for (var x=0; x < lowercase.length; x++) {
        character.push(lowercase[x])}
      }
  var uppercaseconfirm = confirm ("Do you want your password to contain uppercase letters?");
      if (uppercaseconfirm){
          for (var x=0; x < uppercase.length; x++) {
            character.push(uppercase[x])}
      } 
  var numbersconfirm = confirm ("Do you want your password to contain numbers?");
      if (numbersconfirm){
          for (var x=0; x < numbers.length; x++) {
            character.push(numbers[x])}
      }
  var specialconfirm = confirm ("Do you want your password to contain special characters?");
      if (specialconfirm){
          for (var x=0; x < special.length; x++) {
            character.push(special[x])}
      }
      if (lowercaseconfirm === false && uppercaseconfirm === false && numbersconfirm === false && specialconfirm === false) {
        alert ("You must select at least one character type. Please try again.");
        generatePassword();
      }
  var password = "";
      for (var x=0; x < passwordLength; x++ ){
        password = password + character[Math.floor(Math.random() * character.length)];
      }
      return password;
}

//Write password to the #password input.
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
