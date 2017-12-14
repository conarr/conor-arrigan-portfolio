var hotel = {
  Rooms: 20,
}

var rooms = 20;
function myFunction() {
  var booking = document.getElementById("roomsAvailable").value;

  if (booking > rooms) {
      document.getElementById("roomsLeft").innerHTML = "I'm sorry, there are only " + rooms + " cold, damp rooms available!"

    } else {
  rooms = rooms - booking; document.getElementById("roomsLeft").innerHTML = "There are " + rooms + " cold, damp rooms available!"
}
}