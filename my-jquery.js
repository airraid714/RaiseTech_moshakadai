$(window).resize(function(){
    let Windowsize = $(window).width();
    if (Windowsize >= 1201 ) {
        document.querySelector(`input[type='checkbox'][id='menu-btn-check']`).checked = false;
    }
});