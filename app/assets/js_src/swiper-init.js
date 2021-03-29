


;(function(){
    
    var swiper = new Swiper('.swiper-main-screen', {
        spaceBetween: 30,  
        pagination: {
            el: '.swiper-pagination',
        },
    }); 

    const heightSlides = swiper.$wrapperEl ? swiper.$wrapperEl[0].scrollHeight : 'auto'

    swiper.$wrapperEl && Object.keys(swiper.slides).map( key => { 
        const isVal = typeof(Number(key)) 
        if(swiper.slides[key].style) swiper.slides[key].style.height = heightSlides + 'px'
    })

}());

