


;(function(){
    const btnCatalog =  document.getElementById('callOpen')
    const wrapCatalog = document.getElementById('menu-wrap')
    const menuCatalog = document.getElementById('menu')
    const mainElement = document.querySelector('main') 
    
    btnCatalog && btnCatalog.addEventListener('click', function() {
        menuCatalog.classList.add('mobile-menu-open')
        wrapCatalog.classList.add('show')
        document.body.style.overflow = 'hidden'
        mainElement.style.zIndex  = 999

    });
    wrapCatalog && wrapCatalog.addEventListener('click', function () {
        menuCatalog.classList.remove('mobile-menu-open')
        wrapCatalog.classList.remove('show')
        document.body.style.overflow = ''
        mainElement.style.zIndex  = 'auto'
    }) 
}());
