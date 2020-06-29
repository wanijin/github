$(function(){
    $('.ABP').click(function(){
        $('#ABP').fadeIn();
        $('#ABT').css('display','none').fadeOut();
        $('#SWP').css('display','none').fadeOut();
        $('#KLG').css('display','none').fadeOut();
    });

    $('.ABT').click(function(){
        $('#ABP').css('display','none').fadeOut();
        $('#ABT').fadeIn();
        $('#SWP').css('display','none').fadeOut();
        $('#KLG').css('display','none').fadeOut();
    });

    $('.SWP').click(function(){
        $('#ABP').css('display','none').fadeOut();
        $('#ABT').css('display','none').fadeOut();
        $('#SWP').fadeIn();
        $('#KLG').css('display','none').fadeOut();
    });
    
    $('.KLG').click(function(){
        $('#ABP').css('display','none').fadeOut();
        $('#ABT').css('display','none').fadeOut();
        $('#SWP').css('display','none').fadeOut();
        $('#KLG').fadeIn();
    });

    // menu

    $('.ABP').click(function(){
        $('.color-1').fadeIn();
        $('.color-2').css('display','none').fadeOut();
        $('.color-3').css('display','none').fadeOut();
        $('.color-4').css('display','none').fadeOut();
    });

    $('.ABT').click(function(){
        $('.color-1').css('display','none').fadeOut();
        $('.color-2').fadeIn();
        $('.color-3').css('display','none').fadeOut();
        $('.color-4').css('display','none').fadeOut();
    });

    $('.SWP').click(function(){
        $('.color-1').css('display','none').fadeOut();
        $('.color-2').css('display','none').fadeOut();
        $('.color-3').fadeIn();
        $('.color-4').css('display','none').fadeOut();
    });
    
    $('.KLG').click(function(){
        $('.color-1').css('display','none').fadeOut();
        $('.color-2').css('display','none').fadeOut();
        $('.color-3').css('display','none').fadeOut();
        $('.color-4').fadeIn();
    });
})

$(function(){
    $('#sec04-btn-01').click(function(){
        $('#sec04-con-01').fadeIn();
        $('#sec04-con-02').css('display','none').fadeOut();
        $('#sec04-con-03').css('display','none').fadeOut();
    });

    $('#sec04-btn-02').click(function(){
        $('#sec04-con-02').fadeIn();
        $('#sec04-con-01').css('display','none').fadeOut();
        $('#sec04-con-03').css('display','none').fadeOut();
    });

    $('#sec04-btn-03').click(function(){
        $('#sec04-con-03').fadeIn();
        $('#sec04-con-01').css('display','none').fadeOut();
        $('#sec04-con-02').css('display','none').fadeOut();
    });

});