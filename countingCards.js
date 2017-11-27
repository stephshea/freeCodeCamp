  var count = 0;

function cc(card) {

if (card <= 6) ++count; 
else if (card <= 9); // do nothing to count if card is either 7, 8 or 9
else --count; // all the other cases is either 10, "J", "Q", "K", "A"

if (count > 0){
return count + " Bet";
} else {
return count + " Hold";
}
}