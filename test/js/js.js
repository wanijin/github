
// 메뉴
$(function(){
    $(".navi").mouseover(function(){
        $(".sub_nav").stop().slideDown();
        $(".sub_nav").css("display","flex");
    });

    $(".navi").mouseleave(function(){
        $(this).children(".sub_nav").stop().slideUp();
    });
});


// 슬라이드
setInterval(function(){
    setInterval(function(){
        
        $(".main_section").delay("2500");
        $(".main_section").animate({marginTop: "-300px"}, "500");
        
        $(".main_section").delay("2500");
        $(".main_section").animate({marginTop: "-600px"}, "500");
    
        $(".main_section").delay("2500");
        $(".main_section").animate({marginTop: "0"}, "500");
    }) 

})
