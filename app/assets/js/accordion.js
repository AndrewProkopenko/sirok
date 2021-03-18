const accordions = document.querySelectorAll('.js-acc')

accordions.forEach(element => { 
    element.querySelector('.js-acc-btn').addEventListener('click', () => {
        element.classList.toggle('open')
    })
}); 