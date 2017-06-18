$(document).ready(function(){

    // About Page (index.html)
    
    $(".content-container--about-arrow").click(function(){
        $(".content-container--about-extra-info").slideToggle('400'),
        $(".toggle-btn-about").toggleClass('toggle-btn-about-open'),
        $(".toggle-btn-about-text").toggleClass('toggle-btn-about-text-hidden'),
        $(".toggle-btn-about-text-2-hidden").toggleClass('toggle-btn-about-text-2');
    });

});