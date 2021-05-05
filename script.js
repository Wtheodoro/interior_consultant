let menu = document.querySelector('.mobile-menu')
let links = document.querySelector('.links')

const toggleMenu = () => {
  console.log('test')
  links.classList.toggle('active')
}

menu.addEventListener('click', toggleMenu)
