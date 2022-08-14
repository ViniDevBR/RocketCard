const body = document.querySelector('body')
const menu = document.querySelector(".menu")
const navOn = document.querySelector("nav")

menu.addEventListener('click', () =>{
  navOn.classList.toggle('on')
 
  const navContainsON = navOn.classList.contains('on')
  if(navContainsON === true){
    body.classList.toggle('menuClose')
  } else {
    body.classList.toggle('menuClose')
  }
})