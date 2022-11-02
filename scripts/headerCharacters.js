//Get header-characters elements
const charactersHolder = document.getElementsByClassName("header-characters")[0];
var scaleMult = 1.5;
var yOffset = 0;

//Event listener on scroll
window.addEventListener("scroll", function(event) {
  yOffset = this.scrollY;

  scaleCharacters();
}, false);

function scaleCharacters() {
  var minWidth = parseFloat(window.getComputedStyle(charactersHolder,null).getPropertyValue("min-width"));
  var normalWidth = window.innerWidth * 0.8;
  if (normalWidth < minWidth)
    normalWidth = minWidth;

  var scaledWidth = normalWidth + (yOffset / scaleMult);
  charactersHolder.style.width = (Number(scaledWidth)) + "px";
}
