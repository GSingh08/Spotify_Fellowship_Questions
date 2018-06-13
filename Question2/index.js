// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
//
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"




//create function with 1 argument.
// create let decodedStr = [] to push variable from str to array.
const decodeString = function(s) {
let decodedStr = [];
  for (let i of s) {
    // create for loop that itterates through s until reaches "]" and push to decodedStr.
    if (i !== ']') {
      decodedStr.push(i);
    } else {
      //create let getLetters = '';
let getLetters = "";
//create while loop that itterates through decodedStr.length-1 and pops and stores it in getLetters until it sees "[".  We do this because we want to seperate the number from the letter so now decodedStr has the number and "[" and getLetters has the letters
  while (decodedStr[decodedStr.length - 1] !== '[') {
      getLetters = decodedStr.pop() + getLetters;
    }
    //pop off the "[" from the decodedStr so now the number is alone.
    decodedStr.pop();
let number = "";
//create number variable and create while loop that states decodedStr.length needs to be > 0 and decodedStr.length -1 matches with any number from 0-9,"go here for help with regex https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
  while (decodedStr.length > 0 && decodedStr[decodedStr.length - 1].match(/[0-9]+/)) {
    //now we take that number and store it in number variable.
      number = decodedStr.pop() + number;
    }
    // turn number into a number using parseInt
  number = parseInt(number);
  //create var r which equals empty string
  let r = "";
  // create while loop that adds getLetters(letters) to r and subtracts from number(num) until condition is met.
  while (number > 0) {
  r += getLetters ;
    number--;
  }
  decodedStr.push(r);
  }
}
//push r to decodedStr and return decodedStr
  return decodedStr;
};


decodeString("4[ab]");
