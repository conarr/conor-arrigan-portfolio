var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

setInterval(function() {
  // Calls the number shift dropdown menu
  var k = parseInt(document.getElementById("numberShift").value);
  // Selects the text field for inputting the original text and makes it uppercase
  var input = document.getElementById("originalText").value.toUpperCase();

  var output = "";
  // Selects the text field for inputting the original text and makes it uppercase

  for(var i = 0; i < input.length; i++)
  {
    if(letters.indexOf(input.charAt(i)) == -1)
    {
      output = output + input.charAt(i);
    }
    else
    {
    // If either the Encrypt or Decrypt buttons are checked
      if(document.getElementsByName("mode")[0].checked)
      {
      // Output the letters + the number selected in the dropdown menu
        output = output + letters[(letters.indexOf(input.charAt(i))+k)%26];
      }
      else
      {
      // Output the letters - the number selected in the dropdown menu
        output = output + letters[((letters.indexOf(input.charAt(i))-k)+26)%26];
      }
    }
  }
  // Outputs the resulting encrypted text to the text field
  document.getElementById("outputText").value = output;
}, 100);