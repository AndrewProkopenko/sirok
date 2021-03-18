//swiper init 
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,  
    pagination: {
        el: '.swiper-pagination',
    },
});
const heightSlides = swiper.$wrapperEl[0].scrollHeight 

Object.keys(swiper.slides).map( key => { 
    const isVal = typeof(Number(key)) 
    if(swiper.slides[key].style) swiper.slides[key].style.height = heightSlides + 'px'
})