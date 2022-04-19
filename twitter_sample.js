var input = prompt("Enter a tweet of yours.");
var stringLength = input.length;
var maxInput = 140;
var inputExceeded = 140 - stringLength;
alert(input.slice(0, 140));
alert("You entered an input of "+stringLength+". So, you have exceeded "+inputExceeded+" characters.");