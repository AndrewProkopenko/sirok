const smallImage = document.querySelectorAll('.js-image-small'), 
            bigImage = document.querySelector('.js-image-large'); 
    
const zoomed = document.querySelectorAll('.zoomed-image')

if(window.innerWidth > 992) {
    zoomed.forEach(element => {
        element.addEventListener("mouseenter", function (e) {
            this.style.backgroundSize = "150%"
        }, !1)

        element.addEventListener("mousemove", function (e) {
            var r = this.getBoundingClientRect(),
            o = e.clientX - r.left,
            n = e.clientY - r.top,
            t = Math.round(100 / (r.width / o)),
            i = Math.round(100 / (r.height / n));
            this.style.backgroundPosition = t + "% " + i + "%"
        }, !1)
        element.addEventListener("mouseleave", function (e) {
            this.style.backgroundSize = "contain", this.style.backgroundPosition = "center"
        }, !1) 
    });
}

    
smallImage.forEach( (item) => {  
    console.log(item)
    item.onclick = function (e) {  
        const url = e.target.getAttribute('data-url')
        bigImage.style.backgroundImage = `url(${url})` 
        smallImage.forEach( (item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    }
})