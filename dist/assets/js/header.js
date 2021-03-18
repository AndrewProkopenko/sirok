

const winWidth = window.innerWidth

const menuItem = document.querySelectorAll('.js-menu-hover-item a') 
const menuIcons = document.querySelectorAll('.js-menu-hover-item i') 
const menuList = document.querySelectorAll('.js-menu-list') 

const mobileClose = document.querySelector('.js-mobile-close-menu')
    

const menuContainer = document.querySelector('.js-category-menu')
const menuBtn = document.querySelector('.js-category-btn')
const menuWrapper = document.querySelector('.js-category-wrapper')


// search and mobile menu 
    const searchBtn = document.querySelectorAll('.js-search-btn')
    const searchWrapper = document.querySelector('.js-search-wrapper')
    const searchForm = document.querySelector('.js-search-form')


    const headerBtn = document.querySelector('.js-header-menu-btn')
    const headerMenu = document.querySelector('.js-header-menu')
    const headerWrapper = document.querySelector('.js-menu-wrapper')

    headerBtn.addEventListener('click', function() {
        headerMenu.classList.add('mobile-menu-open') 
        headerWrapper.classList.add('show') 

    });
    mobileClose.addEventListener('click', function() {
        headerMenu.classList.remove('mobile-menu-open') 
        headerWrapper.classList.remove('show') 

        closeInnerMenu()
    })
    headerWrapper.addEventListener('click', function() {
        headerMenu.classList.remove('mobile-menu-open') 
        headerWrapper.classList.remove('show') 

        closeInnerMenu()
    })
    searchBtn.forEach(item => {
        item.addEventListener('click', function() {
            searchForm.classList.add('show') 
            searchWrapper.classList.add('show')
        document.body.style.overflow = 'hidden'
        });
    })
    searchWrapper.addEventListener('click', function() {
        searchForm.classList.remove('show') 
        searchWrapper.classList.remove('show')
        document.body.style.overflow = ''
    })
 

// categories modal menu 

    menuBtn.addEventListener('click', () => {
        menuContainer.classList.add('show')
        if(winWidth < 992) {
            menuBtn.classList.add('open')
        }
    })
    menuWrapper.addEventListener('click', () => {
        if(winWidth < 992) {
            menuList.forEach(list => {
                list.classList.remove('show')
            }) 
        }
        menuContainer.classList.remove('show')
        
        closeInnerMenu()
    })

// categories hover-click 
    
 
     
    if(winWidth > 992) menuItem.forEach((item) => {
       item.onmouseover =  function(e) {
            const id = e.target.getAttribute('data-menu-id')
            menuList.forEach(list => {   
                const listId = list.getAttribute('data-menu-id')
                if(listId === id) list.classList.add('show')
                else list.classList.remove('show')
            });
        }
    }) 
    else { 
        menuIcons.forEach( (item) => { 
            item.onclick = function(e) {
                const id = e.target.getAttribute('data-menu-id') 
                menuList.forEach(list => {   
                    const listId = list.getAttribute('data-menu-id')
                    if(listId === id) list.classList.add('show')
                    else list.classList.remove('show') 
                    
                    list.querySelector('.js-icon-back').onclick = function() {
                        list.classList.remove('show')
                    }
                });
            }
        })
    }

    function closeInnerMenu() { 
        menuBtn.classList.remove('open') 
        menuContainer.classList.remove('show') 
        menuList.forEach(list => {
            list.classList.remove('show')
            if(winWidth > 992) {
                if(list.classList.contains('main-list')) list.classList.add('show')
            }  
        })

    }
 