//Get header-characters elements
const charactersHolder = document.getElementsByClassName("header-characters")[0];
var scaleMult = 1.5;
var maxOffsetToFade = 350;
var yOffset = 0;

//Event listener on scroll
window.addEventListener("scroll", function(event) {
  yOffset = this.scrollY;

  animateCharacters();
}, false);

function getYOffset(element) {
  var bodyRect = document.body.getBoundingClientRect();
  elemRect = element.getBoundingClientRect();
  offset = elemRect.top - bodyRect.top;
  return offset;
}

function animateCharacters() {
  var minWidth = parseFloat(window.getComputedStyle(charactersHolder,null).getPropertyValue("min-width"));
  var windowWidth = window.innerWidth;
  var normalWidth = windowWidth * 0.8;
  if (normalWidth < minWidth)
    normalWidth = minWidth;

  //Scale characters wider
  var scaledWidth = normalWidth + (yOffset / scaleMult);
  charactersHolder.style.width = (Number(scaledWidth)) + "px";

  //Fade out characters
  var offsetToChars = yOffset - getYOffset(charactersHolder);
  if (offsetToChars < 0)
    offsetToChars = 0;

  var offsetMult = offsetToChars / maxOffsetToFade;
  if (offsetMult > 1)
    offsetMult = 1;

  charactersHolder.style.opacity = 1 - offsetMult;
}
