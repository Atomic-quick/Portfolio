window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img]").forEach(div => {
        div.classList.remove("show")
      })
      const div = document.querySelector(entry.target.dataset.imgToShow)
      div?.classList.add("show")
      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})

let topb = document.getElementById('box-top');
let right = document.getElementById('box-right');

window.addEventListener('scroll',()=>{
    let valueY = window.scrollY;

  right.style.right = valueY * -0.3 + 'px';
  topb.style.top = valueY * 0.6 + 'px';
});