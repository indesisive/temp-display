// The global script that controls the nav bar

const menuBtn = document.querySelector('.menuIcon span')
const srchBtn = document.querySelector('.searchIcon')
const cnclBtn = document.querySelector('.cancelIcon')
const links = document.querySelector('.navLinks')
const form = document.querySelector('form')

menuBtn.onclick = () => {
    links.classList.add('active')
    menuBtn.classList.add('hide')
    srchBtn.classList.add('hide')
    cnclBtn.classList.add('show')
}

cnclBtn.onclick = () => {
    links.classList.remove('active')
    menuBtn.classList.remove('hide')
    srchBtn.classList.remove('hide')
    cnclBtn.classList.remove('show')
    form.classList.remove('active')
}

srchBtn.onclick = () => {
    form.classList.add('active')
    srchBtn.classList.add('hide')
    cnclBtn.classList.add('show')
}