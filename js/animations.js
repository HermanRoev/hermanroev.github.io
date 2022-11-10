//Scroll animation js for topic page :)
window.onscroll = function() {
    var position = window.scrollY;
    //document.getElementById("box").style.top = position + "px";
    if (position > 500) {
        document.getElementById("txt").style.display = "none";
    }
    else {
        document.getElementById("txt").style.display = "flex";
        document.getElementById("txt").style.left = position*1.5 + "px";
    }

    vrzoom();
 }
 
 function vrzoom() {
    var zoom = document.getElementById("zoom");
    var offset = zoom.offsetTop;
    if (window.scrollY >= offset) {
        document.getElementById("zoom").classList.add = "sticky";
    }
    else {
        document.getElementById("zoom").classList.remove = "sticky";
    }
 }