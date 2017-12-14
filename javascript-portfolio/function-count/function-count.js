function calculate() {
  var letter = document.getElementById("alphabet").value;
  var sentence = document.getElementById("check").value;

  var result = 0;
  for (var i = 0; i <= sentence.length; i++) {
    if(sentence.charAt(i) === letter) {
      result++; 
    }
   
  }
   document.getElementById("answer").innerHTML = ("There are " + result + " " + letter + "'s in your sentence");
}