
//Sets the width of the div containing the navigation menu to 0 or 250px
function openNav() {
    document.getElementById("popout").style.width = "250px";
  }

function closeNav() {
    document.getElementById("popout").style.width = "0px";
}

//Function to hide nav menu on scroll

var scrollPosition = window.scrollY;
window.onscroll = function() {
  var newScrollPosition = window.scrollY;
  if (scrollPosition > newScrollPosition) {
    document.getElementById("navbar").style.top = "0";
  }
  else {
    document.getElementById("navbar").style.top = "-85px"
  }
  scrollPosition = newScrollPosition;
}