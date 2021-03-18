 

const grid = document.querySelector('.js-grid')
const list = document.querySelector('.js-list')
const bg = document.querySelector('.js-bg-block')
const itemsContainer = document.querySelector('.js-list-container')

grid.addEventListener('click', () => {
    itemsContainer.classList.remove('items-list')
    itemsContainer.classList.add('items-row')
    bg.classList.add('d-none')
})
list.addEventListener('click', () => {
    itemsContainer.classList.add('items-list')
    itemsContainer.classList.remove('items-row')
    bg.classList.remove('d-none')
})