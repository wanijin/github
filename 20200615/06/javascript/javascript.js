$(function(){

    // menu
    $('.navi').mouseover(function(){
        $('.sub_menu').stop().slideDown('fast');
        $('.navi-bg').stop().slideDown('fast');
        $('.sub_menu>a').css('display','block');
    });

    $('.navi').mouseleave(function(){
        $('.sub_menu').stop().slideUp('fast');
        $('.navi-bg').stop().slideUp('fast');
    });

    // 슬라이드
    setInterval(function(){
        $('.slide_box').delay(3000);
        $('.slide_box').animate({marginTop:'-300px'},500);

        $('.slide_box').delay(3000);
        $('.slide_box').animate({marginTop:'-600px'},500);

        $('.slide_box').delay(3000);
        $('.slide_box').animate({marginTop:'0'},500);
    });

    //팝업

    $('#popup').click(function(){
        $('.popup-bg').fadeIn();
    });

    $('#close').click(function(){
        $('.popup-bg').fadeOut();
    });

});