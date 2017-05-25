$(document).ready(function(){
    $(".toggle-btn-shokugei").click(function(){
        $(".show-shokugei").slideToggle('400');
    });
});
$(function(){
    $('.toggle-btn-shokugei').on('click', function(){
        $(this).toggleClass('toggle-btn-shokugei-open')
    });
});




/*------*/

$(document).ready(function(){
    $(".toggle-btn-pratt").click(function(){
        $(".show-pratt").slideToggle('400');
    });
});
$(function(){
    $('.toggle-btn-pratt').on('click', function(){
        $(this).toggleClass('toggle-btn-pratt-open')
    });
});
$(function(){
    $('.toggle-btn-pratt').on('click', function(){
        $(".toggle-btn-pratt-visible").toggleClass('toggle-btn-pratt-hidden'),
        $(".toggle-btn-pratt-2-hidden").toggleClass('toggle-btn-pratt-2-visible')
    });
});

$(document).ready(function(){
    $(".toggle-btn-pratt-visible").click(function(){
        $(".show-pratt").slideToggle('400');
    });
});
$(function(){
    $('.toggle-btn-pratt-visible').on('click', function(){
        $(".toggle-btn-pratt").toggleClass('toggle-btn-pratt-open')
    });
});
$(function(){
    $('.toggle-btn-pratt-visible').on('click', function(){
        $(this).toggleClass('toggle-btn-pratt-hidden'),
        $(".toggle-btn-pratt-2-hidden").toggleClass('toggle-btn-pratt-2-visible')
    });
});


    
/*------*/

$(document).ready(function(){
    $(".toggle-btn-designer").click(function(){
        $(".show-designer").slideToggle('400'),
        $(".resume-column-4-designer").toggleClass('resume-column-4-designer-hidden');
    });
});
$(function(){
    $('.toggle-btn-designer').on('click', function(){
        $(this).toggleClass('toggle-btn-designer-open')
    });
});





/*------*/
$(document).ready(function(){
    $(".toggle-btn-surveyor").click(function(){
        $(".show-surveyor").slideToggle('400'),
        $(".resume-column-4-surveyor").toggleClass('resume-column-4-surveyor-hidden');
    });
});
$(function(){
    $('.toggle-btn-surveyor').on('click', function(){
        $(this).toggleClass('toggle-btn-surveyor-open')
    });
});





/*------*/
$(document).ready(function(){
    $(".toggle-btn-carpenter").click(function(){
        $(".show-carpenter").slideToggle('400'),
        $(".resume-column-4-carpenter").toggleClass('resume-column-4-carpenter-hidden');
    });
});
$(function(){
    $('.toggle-btn-carpenter').on('click', function(){
        $(this).toggleClass('toggle-btn-carpenter-open')
    });
});
$(document).ready(function(){
    $(".toggle-btn-carpenter-visible").click(function(){
        $(".show-carpenter").slideToggle('400'),
        $(".resume-column-4-carpenter").toggleClass('resume-column-4-carpenter-hidden');    
    });
});
$(function(){
    $('.toggle-btn-carpenter-visible').on('click', function(){
        $(".toggle-btn-carpenter").toggleClass('toggle-btn-carpenter-open')
    });
});
