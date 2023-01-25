const fadeables = document.getElementsByClassName("fade-in");
var yOffset = 0;

//Event listener on scroll
window.addEventListener("scroll", function(event) {
  yOffset = this.scrollY;
  yOffset += window.innerHeight / 2; //y offset is center of the screen

  for (let i = 0; i < fadeables.length; i++) {
    var element = fadeables[i];
    showElement(element);
  }
}, false);

function getYOffset(element) {
  var bodyRect = document.body.getBoundingClientRect();
  elemRect = element.getBoundingClientRect();
  offset = elemRect.top - bodyRect.top;
  return offset;
}

//Show element
function showElement(element) {
  var threshold = 250;
  var elementHeight = element.offsetHeight;
  var elementOffset = getYOffset(element);

  if (yOffset >= elementOffset - threshold && yOffset <= elementOffset + elementHeight + threshold) {
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
  }
}
