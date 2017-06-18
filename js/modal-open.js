$(document).ready(function(){
    
    // Portfolio Page (portfolio.html) - click thumb to open its own Modal 
    
    $('#ecobridge-thumb').click(function(){
        $('#ecobridge-portfolio').addClass('modal--is-visible');
    });
    
    $('#animaru-isu-thumb').click(function(){
        $('#animaru-isu-portfolio').addClass('modal--is-visible');
    });
    
    $('#village-house-thumb').click(function(){
        $('#village-house-portfolio').addClass('modal--is-visible');
    });
    
    $('#sato-mega-thumb').click(function(){
        $('#sato-mega-portfolio').addClass('modal--is-visible');
    });
    
    $('#adjustin-cafe-thumb').click(function(){
        $('#adjustin-cafe-portfolio').addClass('modal--is-visible');
    });
    
    $('#clear-view-escapes-thumb').click(function(){
        $('#clear-view-escapes-portfolio').addClass('modal--is-visible');
    });
    
    $('#ajf-thumb').click(function(){
        $('#ajf-portfolio').addClass('modal--is-visible');
    });
    
    $('#till-death-do-us-thumb').click(function(){
        $('#till-death-do-us-portfolio').addClass('modal--is-visible');
    });
    
    $('#wo-man-thumb').click(function(){
        $('#wo-man-portfolio').addClass('modal--is-visible');
    });
    
    $('#hw2018-thumb').click(function(){
        $('#hw2018-portfolio').addClass('modal--is-visible');
    });
    
    
    // close on click of span.close

    $('.close').click(function(){
        $('#ecobridge-portfolio').removeClass('modal--is-visible'),
        $('#animaru-isu-portfolio').removeClass('modal--is-visible'),
        $('#village-house-portfolio').removeClass('modal--is-visible'),
        $('#sato-mega-portfolio').removeClass('modal--is-visible'),
        $('#adjustin-cafe-portfolio').removeClass('modal--is-visible'),
        $('#clear-view-escapes-portfolio').removeClass('modal--is-visible'),
        $('#ajf-portfolio').removeClass('modal--is-visible'),
        $('#till-death-do-us-portfolio').removeClass('modal--is-visible'),
        $('#wo-man-portfolio').removeClass('modal--is-visible'),
        $('#hw2018-portfolio').removeClass('modal--is-visible');
    });
    
    
    // toggle-btn and description slideToggle when Modal is opened
    
    $(".toggle-btn").click(function(){
        $(".modal-description-detail").slideToggle('400'),
        $(this).toggleClass('toggle-btn-open');
    });
});

