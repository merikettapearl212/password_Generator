
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define database of characters for password
var passwordCharacter = {
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  upperCase: ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"],
  specialCharacters: ["!,@,#,$,%,^,&,*,,~,`,+,=,/,\,{,,},[,],<,>,?,,,:,;,."],
  numbers: ["0,1,2,3,4,5,6,7,8,9"],
}

//Click function button
function generatePassword() {
  
  //Create variable that serves as whole lot for loop.
  var characterLot = [];

  //Ask prompt user for password length. Use parsInt so string is made into a number nalue
  var totalLength = parsenInt (prompt ("How long would you like your password to be? (Must be between 8-128 characters)?"));
  
  //If not valid length, prompt again for length
    if (!(totalLength >= 8 || totalLength <= 128)) {
      alert ("Must be between 8-128 characters!");
      return;
    }
}
  //confirm use of lowercase letters
  //var useLowercase = confirm ("Would you like to include lowercase letters?");
    //if (useLowercase === true) { }
  //confirm use of uppercase letters.
  //var useUppercase = confirm ("Would you like to include uppercase letters?");
    //if (useUppercase === true) {}
  //confirm use of special characters.
  //var useSpecial= confirm ("Would you like to include special characters?");
    //if (useSpecial === true) {}
  //confirm use of numbers.
  //var useNumber= confirm = ("Would you like to include numbers?");
    //if (useNumber === true) {}
  
  
    //passwordCharacter += passwordCharacter.charAt(
    //Math.floor(Math.random() * passwordCharacter.length)
//var num = Math.random() * 10) +1;
//Math.ceil
//for (i =0; i < totalLength; i++) {
//   [Math.floor(Math.random() * passwordCharacter.length)];
//  console.log();
//}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


