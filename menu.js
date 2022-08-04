const menu = document.querySelector(".menu")
const navOn = document.querySelector("nav")

menu.addEventListener('click', () =>{
  navOn.classList.toggle('on')
})