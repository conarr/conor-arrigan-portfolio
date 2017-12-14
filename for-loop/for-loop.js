var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
const increasePerMonth = 4;


function count() {
  
for ( monthNumber ; monthNumber <= monthsToPrint; monthNumber++) {
    numSheep *= increasePerMonth;
 document.getElementById("sheep").innerHTML += '<p>There will be ' + numSheep + ' sheeps after ' + monthNumber + ' month(s)!</p>';     
}   
}