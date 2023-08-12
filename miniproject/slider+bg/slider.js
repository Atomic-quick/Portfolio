//slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}



//set background image scroller
document.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.backgroundPositionY = -scrolled + 'px';
});
//set background image
document.getElementById('changeBgButton').addEventListener('click', function() {
    var backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.backgroundImage = "url('../../images/BGS/BG1.jpg')";
});
document.getElementById('changeBgButton2').addEventListener('click', function() {
    var backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.backgroundImage = "url('../../images/BGS/BG2.jpg')";
});
document.getElementById('changeBgButton3').addEventListener('click', function() {
    var backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.backgroundImage = "url('../../images/BGS/BG3.jpg')";
});
document.getElementById('changeBgButton4').addEventListener('click', function() {
    var backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.backgroundImage = "url('../../images/BGS/BG4.jpg')";
});
document.getElementById('changeBgButton5').addEventListener('click', function() {
    var backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.backgroundImage = "url('../../images/BGS/BG5.jpg')";
});
document.getElementById('changeBgButton6').addEventListener('click', function() {
    var backgroundContainer = document.getElementById('backgroundContainer');
    backgroundContainer.style.backgroundImage = "url('../../images/BGS/BG6.jpg')";
});
