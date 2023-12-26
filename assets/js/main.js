window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0)
})

const textButtons = document.querySelectorAll('.contact__btn')
textButtons.forEach(textBtn => {
    let text = textBtn.querySelector('p');
    text.innerHTML.split('').map()
})