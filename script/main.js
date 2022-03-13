/*Hamburger menu*/

function hamburgerMenuClick () {
  var hamburgerMenu = document.querySelector("div.mobile-menu-hamburger");
  var responsiveMenu = document.querySelector("div.responsive-menu");
  hamburgerMenu.classList.toggle("visible");
  responsiveMenu.classList.toggle("visible");
  document.activeElement.blur();
}

/*Slider*/
var feedbackIndex = 1;
showFeedback(feedbackIndex);

function listFeedback(n) {
  showFeedback(feedbackIndex += n);
}

function currentFeedback(n) {
  showFeedback(feedbackIndex = n);
}

function showFeedback(n) {
  var i;
  var feedbacks = document.getElementsByClassName("feedback-sample");
  var dots = document.getElementsByClassName("slider-dot");
  if (n > feedbacks.length) {feedbackIndex = 1}    
  if (n < 1) {feedbackIndex = feedbacks.length}
  for (i = 0; i < feedbacks.length; i++) {
      feedbacks[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  feedbacks[feedbackIndex-1].style.display = "block";  
  dots[feedbackIndex-1].className += " active";
}