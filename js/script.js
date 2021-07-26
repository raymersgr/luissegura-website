$('.btn-show').on('click', function(){
    
    $('form').animate({
        top: '0px'
    });
    
    
    
    $('body').css({
        overflow: 'hidden'
    })
    
})

$('.btn-noshow').on('click', function(){
    
     $('form').animate({
        top: '-400px'
    });
    
    
    
    $('body').css({
        overflowY: 'scroll'
    })
    
})















