//typeing
var typed = new Typed('#element', {
    strings: [' And Esports Admin.',' And Esports Observer.'],
    typeSpeed: 130,
});

var timer = setInterval(Func, 5000);
var seconds = 0;

function Func() {
    var typed = new Typed('#element', {
    strings: [' And Esports Observer.',' And Esports Admin.'],
    typeSpeed: 200,
});
    seconds= seconds+1;
    console.log(seconds);
if (seconds > 2) {
    clearInterval(timer);
}
}


