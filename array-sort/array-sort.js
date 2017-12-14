var albumsArray = [" The Piper at the Gates of Dawn", " A Saucerful of Secrets", " More", " Ummagumma", " Atom Heart Mother", 
" Meddle", " Obscured by Clouds", " The Dark Side of the Moon", " Wish You Were Here", " Animals", " The Wall", " The Final Cut", 
" A Momentary Lapse of Reason", " The Division Bell", " The Endless River"];

document.getElementById("demo").innerHTML = albumsArray;

function myFunction() {
    albumsArray.sort();
    document.getElementById("demo").innerHTML = albumsArray;
}