var header = document.getElementsByClassName("header-content")[0];
var opacity = 0;

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
