$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $(".modal-description-detail").slideToggle('400');
    });
});
$(function(){
    $('.toggle-btn').on('click', function(){
        $(this).toggleClass('toggle-btn-open')
    });
});