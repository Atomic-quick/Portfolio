
// main parallax effect js upto line 35

// let text = document.getElementById('text');
// let leaf = document.getElementById('leaf');
// let tree = document.getElementById('tree');
// let hill1 = document.getElementById('hill1');
// let hill2 = document.getElementById('hill2');
// let hill3 = document.getElementById('hill3');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');

// window.addEventListener('scroll',()=>{
//     let value = window.scrollY;

// //remove next 3 line for start from start
//     let sectionRect = document.getElementById('my-section2').getBoundingClientRect();
// let sectionTop = sectionRect.top + window.scrollY;

//   // Calculate the adjusted value starting from zero at the section top
// value = Math.max(0, value - sectionTop);

//     text.style.marginTop = value *-1.1 + 'px';
//     leaf.style.top = value *-1.5 + 'px';
//     leaf.style.left = value *1.5 + 'px';
//     tree.style.left = value *1 + 'px';
//     tree.style.top = value *0.2 + 'px';
//     // tree.style.transform = scale;
//     hill5.style.left = value *1.5 + 'px';
//     hill4.style.left = value *-1.5 + 'px';
//     hill1.style.top = value *-0.2 + 'px';
//     hill2.style.left = value *-0.4 + 'px';
//     hill3.style.left = value *0.4 + 'px';
// });


let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;

  text.style.marginTop = value * -1.1 + 'px';
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';
  tree.style.left = value * 1 + 'px';
  tree.style.top = value * 0.2 + 'px';
  hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + 'px';
  hill1.style.top = value * -0.2 + 'px';
  hill2.style.left = value * -0.4 + 'px';
  hill3.style.left = value * 0.4 + 'px';
});