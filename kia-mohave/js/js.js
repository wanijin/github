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
});

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

//section06 tab
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();



//section06 contents
$(function(){

  // 섹션6번 탭1 내용들
  $('#thumb-p-1').click(function(){
      $('.mySlides1-1').fadeIn();
      $('.mySlides1-2').css('display','none').fadeOut();
      $('.mySlides1-3').css('display','none').fadeOut();
      $('.mySlides1-4').css('display','none').fadeOut();
      $('.mySlides1-5').css('display','none').fadeOut();
  });

  $('#thumb-p-2').click(function(){
    $('.mySlides1-2').fadeIn();
    $('.mySlides1-1').css('display','none').fadeOut();
    $('.mySlides1-3').css('display','none').fadeOut();
    $('.mySlides1-4').css('display','none').fadeOut();
    $('.mySlides1-5').css('display','none').fadeOut();
  });

  $('#thumb-p-3').click(function(){
    $('.mySlides1-3').fadeIn();
    $('.mySlides1-2').css('display','none').fadeOut();
    $('.mySlides1-1').css('display','none').fadeOut();
    $('.mySlides1-4').css('display','none').fadeOut();
    $('.mySlides1-5').css('display','none').fadeOut();
  });
  
  $('#thumb-p-4').click(function(){
    $('.mySlides1-4').fadeIn();
    $('.mySlides1-2').css('display','none').fadeOut();
    $('.mySlides1-3').css('display','none').fadeOut();
    $('.mySlides1-1').css('display','none').fadeOut();
    $('.mySlides1-5').css('display','none').fadeOut();
  });

  $('#thumb-p-5').click(function(){
    $('.mySlides1-5').fadeIn();
    $('.mySlides1-2').css('display','none').fadeOut();
    $('.mySlides1-3').css('display','none').fadeOut();
    $('.mySlides1-4').css('display','none').fadeOut();
    $('.mySlides1-1').css('display','none').fadeOut();
  });

  // 섹션6번 탭2 내용들
  $('#thumb-c-1').click(function(){
    $('.mySlides2-1').fadeIn();
    $('.mySlides2-2').css('display','none').fadeOut();
    $('.mySlides2-3').css('display','none').fadeOut();
    $('.mySlides2-4').css('display','none').fadeOut();
    $('.mySlides2-5').css('display','none').fadeOut();
    $('.mySlides2-6').css('display','none').fadeOut();
    $('.mySlides2-7').css('display','none').fadeOut();
  });

  $('#thumb-c-2').click(function(){
    $('.mySlides2-2').fadeIn();
    $('.mySlides2-1').css('display','none').fadeOut();
    $('.mySlides2-3').css('display','none').fadeOut();
    $('.mySlides2-4').css('display','none').fadeOut();
    $('.mySlides2-5').css('display','none').fadeOut();
    $('.mySlides2-6').css('display','none').fadeOut();
    $('.mySlides2-7').css('display','none').fadeOut();
  });

  $('#thumb-c-3').click(function(){
    $('.mySlides2-3').fadeIn();
    $('.mySlides2-1').css('display','none').fadeOut();
    $('.mySlides2-2').css('display','none').fadeOut();
    $('.mySlides2-4').css('display','none').fadeOut();
    $('.mySlides2-5').css('display','none').fadeOut();
    $('.mySlides2-6').css('display','none').fadeOut();
    $('.mySlides2-7').css('display','none').fadeOut();
  });

  $('#thumb-c-4').click(function(){
    $('.mySlides2-4').fadeIn();
    $('.mySlides2-1').css('display','none').fadeOut();
    $('.mySlides2-2').css('display','none').fadeOut();
    $('.mySlides2-3').css('display','none').fadeOut();
    $('.mySlides2-5').css('display','none').fadeOut();
    $('.mySlides2-6').css('display','none').fadeOut();
    $('.mySlides2-7').css('display','none').fadeOut();
  });

  $('#thumb-c-5').click(function(){
    $('.mySlides2-5').fadeIn();
    $('.mySlides2-1').css('display','none').fadeOut();
    $('.mySlides2-2').css('display','none').fadeOut();
    $('.mySlides2-3').css('display','none').fadeOut();
    $('.mySlides2-4').css('display','none').fadeOut();
    $('.mySlides2-6').css('display','none').fadeOut();
    $('.mySlides2-7').css('display','none').fadeOut();
  });

  $('#thumb-c-6').click(function(){
    $('.mySlides2-6').fadeIn();
    $('.mySlides2-1').css('display','none').fadeOut();
    $('.mySlides2-2').css('display','none').fadeOut();
    $('.mySlides2-3').css('display','none').fadeOut();
    $('.mySlides2-4').css('display','none').fadeOut();
    $('.mySlides2-5').css('display','none').fadeOut();
    $('.mySlides2-7').css('display','none').fadeOut();
  });

  $('#thumb-c-7').click(function(){
    $('.mySlides2-7').fadeIn();
    $('.mySlides2-1').css('display','none').fadeOut();
    $('.mySlides2-2').css('display','none').fadeOut();
    $('.mySlides2-3').css('display','none').fadeOut();
    $('.mySlides2-4').css('display','none').fadeOut();
    $('.mySlides2-5').css('display','none').fadeOut();
    $('.mySlides2-6').css('display','none').fadeOut();
  });

  // 섹션6번 탭3 내용들
  $('#thumb-s-1').click(function(){
    $('.mySlides3-1').fadeIn();
    $('.mySlides3-2').css('display','none').fadeOut();
    $('.mySlides3-3').css('display','none').fadeOut();
    $('.mySlides3-4').css('display','none').fadeOut();
  });

  $('#thumb-s-2').click(function(){
    $('.mySlides3-2').fadeIn();
    $('.mySlides3-1').css('display','none').fadeOut();
    $('.mySlides3-3').css('display','none').fadeOut();
    $('.mySlides3-4').css('display','none').fadeOut();
  });

  $('#thumb-s-3').click(function(){
    $('.mySlides3-3').fadeIn();
    $('.mySlides3-1').css('display','none').fadeOut();
    $('.mySlides3-2').css('display','none').fadeOut();
    $('.mySlides3-4').css('display','none').fadeOut();
  });

  $('#thumb-s-4').click(function(){
    $('.mySlides3-4').fadeIn();
    $('.mySlides3-1').css('display','none').fadeOut();
    $('.mySlides3-2').css('display','none').fadeOut();
    $('.mySlides3-3').css('display','none').fadeOut();
  });

});

//seciton08s
function openTab(evt, sec08Name) {
  var i, tabcontent08, tablinks08;
  tabcontent08 = document.getElementsByClassName("sec08-content");
  for (i = 0; i < tabcontent08.length; i++) {
    tabcontent08[i].style.display = "none";
  }
  tablinks08 = document.getElementsByClassName("sec08-tablinks");
  for (i = 0; i < tablinks08.length; i++) {
    tablinks08[i].className = tablinks08[i].className.replace(" active", "");
  }
  document.getElementById(sec08Name).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//section09

$(function(){
  $(".img1-right").click(function(){
    $('.sec09-slide-img1').animate({marginLeft: "-950px"});
    $('.img2-left').css('display','block');
    $('.img2-right').css('display','block');
    $('.img1-right').css('display','none');
    $('.img3-left').css('display','none');
  });
  $(".img2-right").click(function(){
    $('.sec09-slide-img1').animate({marginLeft: "-1900px"});
    $('.img1-right').css('display','none');
    $('.img2-left').css('display','none');
    $('.img2-right').css('display','none');
    $('.img3-left').css('display','block');
  });
  $(".img3-left").click(function(){
    $('.sec09-slide-img1').animate({marginLeft: "-950px"});
    $('.img1-right').css('display','none');
    $('.img2-left').css('display','block');
    $('.img2-right').css('display','block');
    $('.img3-left').css('display','none');
  });
  $(".img2-left").click(function(){
    $('.sec09-slide-img1').animate({marginLeft: "0"});
    $('.img1-right').css('display','block');
    $('.img2-left').css('display','none');
    $('.img2-right').css('display','none');
    $('.img3-left').css('display','none');
  });

});

// $(window).resize(function() {
//   if($(window).width() >768) {
//     $('#sec09').css('height','none');
//   }
// });








