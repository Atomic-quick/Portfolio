// var typed = new Typed('#admin', {
//     strings: ['(Admin)'],
//     typeSpeed: 100,
// });

function myFunction() {
    var elements = document.getElementsByClassName('aditya');
    for (var i = 0; i < elements.length; i++) {
    // Perform your desired operation on each element
    var typed = new Typed(elements[i], {
        strings: ['(Admin)'],
        typeSpeed: 100,
    });
    }
}
myFunction();


function myFunction2() {
    var elements = document.getElementsByClassName('roy');
    for (var i = 0; i < elements.length; i++) {
    // Perform your desired operation on each element
    var typed = new Typed(elements[i], {
        strings: ['(Observer)'],
        typeSpeed: 100,
    });
    }
}
myFunction2();



function myFunction3() {
    var elements = document.getElementsByClassName('ana');
    for (var i = 0; i < elements.length; i++) {
    // Perform your desired operation on each element
    var typed = new Typed(elements[i], {
        strings: ['(Analyst)'],
        typeSpeed: 100,
    });
    }
}
myFunction3();

// function loop(){
//     for (let j = 0; j < 6; j++) {
//         // const element = array[j];
//         myFunction3();
//     }
// }
// loop();


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

