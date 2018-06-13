// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".



        // Why did you use for of instead of for in?
//used for of to create key value pair in letterObj variable.

// create function that takes 2 arguments
function sortByStrings(s,t) {
  // create 2 variables that take the arguments and puts them into lowercase.
  let sToLower = s.toLowerCase();
  let tToLower = t.toLowerCase();
// create empty object called letterObj to keep track how many times a letter appears
  let letterObj = {};
// create variable sortedString that is an empty string that will later hold the letter that appear in both s and t
  let sortedString = "";
  // create for loop that goes through each letter of sToLower
//  create ternary statement that says if key value pair is already present add one, if not give it value of 1.


  for (let letter of sToLower) {
    letterObj[letter]? letterObj[letter]++ : letterObj[letter] = 1;
  }

// Create another for loop that goes through each letter of tToLower
//if letter in tToLower matches that of letter in letterObj add it to sortedString variable.
  for (let letter of tToLower) {
    if (letterObj[letter]) {
      sortedString += letter.repeat(letterObj[letter])
    }
  }

  return sortedString
}

sortByStrings("good", "odg");
sortByStrings("weather","therapyw");
//edge cases
sortByStrings("", "");
sortByStrings("G", "g");
sortByStrings("$", "");
