 



;(function(){
    const grid = document.querySelector('.js-grid')
    const list = document.querySelector('.js-list')
    const bg = document.querySelector('.js-bg-block')
    const itemsContainer = document.querySelector('.js-list-container')
    
    grid && grid.addEventListener('click', () => {
        itemsContainer.classList.remove('items-list')
        itemsContainer.classList.add('items-grid')
        bg.classList.add('d-none')
    })
    list && list.addEventListener('click', () => {
        itemsContainer.classList.add('items-list')
        itemsContainer.classList.remove('items-grid')
        bg.classList.remove('d-none')
    })
}());