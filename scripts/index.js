const cards = document.querySelectorAll('.process__card')
const activeSign = document.querySelectorAll('.card__active-sign')

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('active')

        activeSign.forEach((sign) => {
            if (card.classList.contains('active')) {
                sign.innerHTML = `
                <img src="images/minus-icon.svg" alt="minus" />
                `
            } else {
                sign.innerHTML = `
                <img src="images/Plus-icon.svg" alt="Plus" />
                `
            }
        })
    })
  })