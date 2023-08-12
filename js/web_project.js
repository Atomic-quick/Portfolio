window.addEventListener('scroll',myFunction4);
window.addEventListener('load',myFunction4);
function myFunction4(){
    var x =document.querySelectorAll('.des');
    for (let i = 0; i < x.length; i++){
        if (x[i].getBoundingClientRect().top < window.innerHeight/1.2) {
            x[i].classList.add('show');
        }
        if (x[i].getBoundingClientRect().top > window.innerHeight) {
            x[i].classList.remove('show');
        }
    }
    var x =document.querySelectorAll('.des2');
    for (let i = 0; i < x.length; i++){
        if (x[i].getBoundingClientRect().top < window.innerHeight/1.2) {
            x[i].classList.add('show2');
        }
        if (x[i].getBoundingClientRect().top > window.innerHeight) {
            x[i].classList.remove('show2');
        }
    }
}
