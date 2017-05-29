$(document).ready(function(){
    $(".toggle-btn-ecobridge").click(function(){
        $(".ecobridge-modal-description-detail").slideToggle('400');
    });
});
$(function(){
    $('.toggle-btn-ecobridge').on('click', function(){
        $(this).toggleClass('toggle-btn-ecobridge-open')
    });
});