
// Sets the width of the div containing the navigation menu to 0 or 250px
// Changes visibility to hide links, so they are not targetable while not on screen
function openNav() {
    document.getElementById("popout").style.width = "250px";
    document.getElementById("popout").style.visibility = "visible"; 
  }

function closeNav() {
    document.getElementById("popout").style.width = "0px";
    document.getElementById("popout").style.visibility = "hidden";  
}

// Function to hide nav menu on scroll
var scrollPosition = window.scrollY;
window.onscroll = function() {  // On Scroll event listener that calls a funtion each time a scroll event occurs
  var newScrollPosition = window.scrollY; // Sets where you are on the page as the position
  if (scrollPosition > newScrollPosition) { // Checks if you scrolled up or down and changes the position of the nav element based on that
    document.getElementById("navbar").style.top = "0";
  }
  else {
    document.getElementById("navbar").style.top = "-85px"
  }
  scrollPosition = newScrollPosition;
}