
;(function(){
    const accordions = document.querySelectorAll('.js-acc')

    accordions && accordions.forEach(element => { 
        element.querySelector('.js-acc-btn').addEventListener('click', () => {
            element.classList.toggle('open')
        })
    }); 
}());