document.getElementById('callOpen').addEventListener('click', function() {
    document.getElementById('menu').classList.add('mobile-menu-open')
    document.getElementById('menu-wrap').classList.add('show')
    document.body.style.overflow = 'hidden'
    document.querySelector('main').style.zIndex  = 999

});
document.getElementById('menu-wrap').addEventListener('click', function () {
    document.getElementById('menu').classList.remove('mobile-menu-open')
    document.getElementById('menu-wrap').classList.remove('show')
    document.body.style.overflow = ''
    document.querySelector('main').style.zIndex  = 'auto'
})