/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue(hand) {
  var result = 0;
  var aces = 0;

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      aces++;
    }
    else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      result += 10;
    }
    else {
      result += +hand[i];
    }
  }
  for (var j = aces; j > 0; j--) {
    if (result > (11 - j)) {
      result += 1;
    }
    else {
      result += 11;
    }
  }
  return result;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11
Bust = 22

*/