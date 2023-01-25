const header = document.getElementsByClassName("header-content")[0];
var h1 = header.getElementsByTagName("h1")[0];
var h2 = header.getElementsByTagName("h2")[0];

//Setup h2, store it and clear it
if (h2 != null) {
  var h2OriginalText = h2.textContent;
  h2.textContent = "";
  insertText();
}

//Setup headers opacity
var opacity = 0;
header.style.opacity = opacity;

//Animate icon, fade in the header
animateIcon();

//Animates icon by fading it in
function animateIcon() {
  const timeToAnimate = 800;
  const increase = 1 * 10 / timeToAnimate;

  let timer = setInterval(function() {
    opacity += increase;

    //Compeleted fading
    if (opacity >= 1){
      opacity = 1;

      clearInterval(timer);
      timer = null;
    }

    header.style.opacity = opacity;
  }, 10)
}

//Animates text by insersting it one by opponents
function insertText() {
  const timeToAnimate = 1000;
  var string = h2OriginalText;
  var animateTime = timeToAnimate / string.length;
  h2.textContent = ""; //First letter is only shown

  var index = -1;
  let timer = setInterval(function() {
    if (index < string.length - 1) {
      index++;
      h2.textContent += string[index];
    }
    else {
      clearInterval(timer);
      timer = null;
    }
  }, animateTime)
}
