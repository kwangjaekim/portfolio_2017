$(document).ready(function(){
    $(".content-container--about-arrow").click(function(){
        $(".content-container--about-extra-info").slideToggle('400');
    });
});
$(function(){
    $('.content-container--about-arrow').on('click', function(){
        $(".toggle-btn-about").toggleClass('toggle-btn-about-open')
    });
});
$(function(){
    $('.content-container--about-arrow').on('click', function(){
        $(".toggle-btn-about-text").toggleClass('toggle-btn-about-text-hidden'),
        $(".toggle-btn-about-text-2-hidden").toggleClass('toggle-btn-about-text-2')
    });
});
