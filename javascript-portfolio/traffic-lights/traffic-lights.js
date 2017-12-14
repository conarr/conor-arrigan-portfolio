var redLight = document.getElementsByClassName('trafficLightOff')[0]; 
var greenLight = document.getElementsByClassName('trafficLightOff')[1];
 
function lightGreen(){
    redLight.classList.remove('redLightOn');
    greenLight.classList.add('greenLightOn');
}

function lightRed(){
    redLight.classList.add('redLightOn');
    greenLight.classList.remove('greenLightOn');
}

redLight.onclick = lightGreen;
greenLight.onclick = lightRed;