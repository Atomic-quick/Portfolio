const btns= document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("mousemove",function(e) {
        const position = btn.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;

        btn.children[0].style.transform = "translate(" + x * 0.3 + "px," + y * 0.5 + "px)"
    })
});

btns.forEach((btn) => {
    btn.addEventListener("mouseout",function(e) {
        btn.children[0].style.transform = "translate(0px,0px)"
    })
});

