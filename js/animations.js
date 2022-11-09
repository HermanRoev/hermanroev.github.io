//Scroll animation js for topic page :)
window.onscroll = function() {    //Zoomer inn på et objekt før det gjemmes
    var position = window.scrollY;
    document.getElementById("container").style.top = position;
    var scale = position/20;
    document.getElementById("check").style.scale = (1, scale);
    if (position >= 200) { //Gjemmer når man scroller til et satt punkt
      document.getElementById("container").style.visibility = "hidden";
    }
    else {
      document.getElementById("container").style.visibility = "visible";
    }
 }
