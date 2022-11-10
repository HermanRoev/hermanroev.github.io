//Scroll animation js for topic page :)
window.onscroll = function() {
    var position = window.scrollY;
    console.log(position);
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
 
 function getCoords(element) {
    var ele = document.getElementById(element);
    var top = 0;
    while (ele.tagName != "BODY") {
        top += ele.offsetTop;
        ele = ele.offsetParent;
    }
    return top;
 }

 function vrzoom() {
    var cords = getCoords("zoom");
    console.log(cords);
    var zoom = document.getElementById("zoom")
    if (window.scrollY >= cords) {
        zoom.classList.add("sticky");
    }
    else {
        zoom.classList.remove("sticky");
    }
 }
