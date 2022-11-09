//Scroll animation js for topic page :)
window.onscroll = function() {
    var position = window.scrollY;
    document.getElementById("box").style.top = position + "px";
    document.getElementById("txt").style.left = position*7 + "px";
 }
