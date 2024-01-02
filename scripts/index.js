// header

const headerNav = document.querySelector('.main-header__nav-items')
const hamburgerMenu = document.querySelector('.hamburder-menu') 
const overlay = document.querySelector('.overlay')

hamburgerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('active')
    hamburgerMenu.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    headerNav.classList.remove('active')
    hamburgerMenu.classList.remove('active')
    overlay.classList.remove('active')
})

headerNav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
        headerNav.classList.remove('active')
        hamburgerMenu.classList.remove('active')
        overlay.classList.remove('active')
    })
})

// cards

const cards = document.querySelectorAll('.process__card')
const activeSign = document.querySelectorAll('.card__active-sign')

function changeSign() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('active')) {
            activeSign[i].innerHTML = `<img src="images/minus-icon.svg" alt="minus" />`
        } else if (!cards[i].classList.contains('active')) {
            activeSign[i].innerHTML = `<img src="images/Plus-icon.svg" alt="plus" />`
        }
    }
    
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
    card.classList.toggle('active')
    changeSign()
    })
})
