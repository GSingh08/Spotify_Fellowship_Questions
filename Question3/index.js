// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.
//
// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.
//
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:
//
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢




//In my own Words : Create a function that takes an amount in cents ( and denominations and outputs the number of ways to make up the first amount in those denominations.



//create a function that takes 2 arguments, the amount and denominations
function changePossibilities(amount, denominations) {
  // building array for amount indicies with 0 index being value 1.
    let solution = [];
    // Create for loop that itterates through  amount, amount  times.  The point of this is to create an array that acts as a placeholder until our calculations are done later.
    for (let i = 1; i <= amount; i++) {
      // solution[0] = 1 because if it was 0 then our array would be [0,0,0,0,0] and if we do that then the array would not change because you can't add to 0 and since there are no 0c coins we start with 1.
    solution[i] = 0;
    }
    solution[0] = 1;

    // mapped through denominations and create for loop where the index equals the denomination up until the index = the amount using pointer as a reference starting point for solution. Pointer tells you hey go to this index, evaulate it and adds it to the solution at index k.
    denominations.forEach(function(denomination){

    for (let k = denomination; k <= amount; k++) {
      let pointer = k - denomination;
        solution[k] += solution[pointer];
        }
    });
      // The answer will be in the amount index of the solution array.
    return solution[amount];

}

changePossibilities(4,[1,2,3]);
