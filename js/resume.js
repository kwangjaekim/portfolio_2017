$(document).ready(function(){
    
    // Education -- Carpentry
    
    $(".toggle-btn-shokugei").click(function(){
        $(".show-shokugei").slideToggle('400'),
        $(this).toggleClass('toggle-btn-shokugei-open');
    });

    
    // Education -- University
    
    $(".toggle-btn-pratt").click(function(){
        $(".show-pratt").slideToggle('400'),
        $(this).toggleClass('toggle-btn-pratt-open'),
        $(".toggle-btn-pratt-visible").toggleClass('toggle-btn-pratt-hidden'),
        $(".toggle-btn-pratt-2-hidden").toggleClass('toggle-btn-pratt-2-visible');
    });
    
    
    $(".toggle-btn-pratt-visible").click(function(){
        $(".show-pratt").slideToggle('400'),
        $(".toggle-btn-pratt").toggleClass('toggle-btn-pratt-open'),
        $(this).toggleClass('toggle-btn-pratt-hidden'),
        $(".toggle-btn-pratt-2-hidden").toggleClass('toggle-btn-pratt-2-visible');
    });    


    // Work Experience -- Designer
    
    $(".toggle-btn-designer").click(function(){
        $(".show-designer").slideToggle('400'),
        $(".resume-column-4-designer").toggleClass('resume-column-4-designer-hidden'),
        $(this).toggleClass('toggle-btn-designer-open');
    });
    
    
    // Work Experience -- Surveyor
    
    $(".toggle-btn-surveyor").click(function(){
        $(".show-surveyor").slideToggle('400'),
        $(".resume-column-4-surveyor").toggleClass('resume-column-4-surveyor-hidden'),
        $(this).toggleClass('toggle-btn-surveyor-open');
    });
    
    
    // Work Experience -- Carpenter
        
    $(".toggle-btn-carpenter").click(function(){
        $(".show-carpenter").slideToggle('400'),
        $(".resume-column-4-carpenter").toggleClass('resume-column-4-carpenter-hidden'),
        $(this).toggleClass('toggle-btn-carpenter-open');
    });
        
    $(".toggle-btn-carpenter-visible").click(function(){
        $(".show-carpenter").slideToggle('400'),
        $(".resume-column-4-carpenter").toggleClass('resume-column-4-carpenter-hidden'),
        $(".toggle-btn-carpenter").toggleClass('toggle-btn-carpenter-open');
    });

});
