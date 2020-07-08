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


// section06 slideshow
var slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
