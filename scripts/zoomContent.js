//Get all body-content elements
const bodyContents = document.getElementsByClassName("zoomable");
var yOffset = 0;

//Make first element to show up
bodyContents[0].style.opacity = 1;

//Event listener on scroll
window.addEventListener("scroll", function(event) {
  yOffset = this.scrollY;
  yOffset += window.innerHeight / 2; //y offset is center of the screen
  //console.log(yOffset); //Log y offset to console

  for (let i = 0; i < bodyContents.length; i++) {
    var element = bodyContents[i];
    zoomElement(element);
  }
}, false);

function getYOffset(element) {
  var bodyRect = document.body.getBoundingClientRect();
  elemRect = element.getBoundingClientRect();
  offset = elemRect.top - bodyRect.top;
  return offset;
}

//Zoom element
function zoomElement(element) {
  var threshold = 25;
  var elementHeight = element.offsetHeight;
  var elementOffset = getYOffset(element);

  if (yOffset >= elementOffset - threshold && yOffset <= elementOffset + elementHeight + threshold) {
    element.style.transform = "scale(1.05)";
  }
  else {
    element.style.transform = "scale(1)";
  }
}

//Show element
function showElement(element) {
  var threshold = 175;
  var elementHeight = element.offsetHeight;
  var elementOffset = getYOffset(element);

  if (yOffset >= elementOffset - threshold && yOffset <= elementOffset + elementHeight + threshold) {
    element.style.opacity = 1;
  }
}
