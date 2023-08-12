const toggle =document.getElementById('tooglewhite');
const adi =document.getElementById('aditya');
const ele =document.getElementById('element');
const body = document.querySelector('body');
const per = document.querySelector('.skills-row');
const nav = document.querySelector('nav');
// const imgbox = document.querySelector('img-box');
// const container = document.querySelector('container');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-toggle-off');
    if(this.classList.toggle('bi-toggle-on')){
        body.style.background = 'black';
        body.style.color='white';
        per.style.filter = 'invert(0)';
        adi.style.filter = 'invert(0)';
        ele.style.filter = 'invert(0)';;
    }else{
        body.style.background = 'white';
        body.style.color='black';
        per.style.filter = 'invert(1)';
        adi.style.filter = 'invert(1)';
        ele.style.filter = 'invert(1)';
    }
})

// const list = document.querySelector('.listhide')
// const burger = document.querySelector('.burger')
// const left = document.querySelector('.left')

// burger.addEventListener('click',function(){
//     this.classList.toggle('list');
//     if (list.style.display != 'block') {
//         list.style.display = 'block';
//     }else{
//         list.style.display = 'none';
//     }
// }
// ) 
// burger.addEventListener('click',function(){
//     this.classList.toggle('list');
//     if (list.style.zIndex != '2') {
//         list.style.zIndex = '2';
//         list.style.opacity = '1';
//     }else{
//         list.style.zIndex = '-2';
//         list.style.opacity = '0';
//     }
// }
// ) 

var lastScrollTop = 0;
navbar = document.getElementById("navbar"); 
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top = '-255px';
    }else{
        navbar.style.top ='0';
    }
    lastScrollTop = scrollTop;
})

const cusor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
    cusor.style.left = e.clientX + 'px';
    cusor.style.top = e.clientY + 'px';
})
const cusor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove',(e)=>{
    cusor2.style.left = e.clientX + 'px';
    cusor2.style.top = e.clientY + 'px';
})
const cusor3 = document.querySelector('.cursor3');
document.addEventListener('mousemove',(e)=>{
    cusor3.style.left = e.clientX + 'px';
    cusor3.style.top = e.clientY + 'px';
})

  // button to top
  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}