

;(function(){
    const selects = document.querySelectorAll('.select-init')
    
    selects.forEach((item) => { 
        new Selectr(item, { 
            searchable: false
        }); 
    })
}());

