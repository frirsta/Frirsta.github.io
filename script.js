
function openNav() {
    document.getElementById("myNavbar").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNavbar").style.height = "0%";
}



/*SCROLL UP*/ 


scrollbutton = document.getElementsById('scroll-button');



function scrollUp() {
    document.body.scrollTop = 0; /*SAFARI*/
    document.documentElement.scrollTop = 0; /* CHROME FIREFOX IE OPERA */
}