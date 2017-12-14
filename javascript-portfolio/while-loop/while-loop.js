function Inv(){
  var inventory = 40;
  var numTaken = 0;
  while (inventory > 0) {
  numTaken = prompt("We currently have " + inventory + " items in stock, how many would you like?");
    if (numTaken > inventory){
      numTaken = prompt("I just said we have 40 items!! We do not have enough items. We have " + inventory + " items left.")
    }
  inventory = inventory - numTaken; 
  }alert("You have bought all of our stock!");
}