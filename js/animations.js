//Scroll animation js for topic page :)
window.onscroll = function() {
    var position = window.scrollY;
    //document.getElementById("box").style.top = position + "px";
    document.getElementById("txt").style.left = position*2 + "px";
    if (position > 500) {
        document.getElementById("txt").style.display = "none";
    }
    else {
        document.getElementById("txt").style.display = "flex";
    }
 }
