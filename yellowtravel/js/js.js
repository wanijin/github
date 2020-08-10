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
    elmnt.style.color = '#181818';
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




  // index > sevice-icon icon & textcolor hover
  
  $('.service-icon>div:nth-child(1)').mouseover(function(){
    $('.service-icon>div:nth-child(1) img').attr('src','images/icon-rome-y.png');
    $('.service-icon>div:nth-child(1) a').css('color','#ffd800');
  });
  $('.service-icon>div:nth-child(1)').mouseleave(function(){
    $('.service-icon>div:nth-child(1) img').attr('src','images/icon-rome.png');
    $('.service-icon>div:nth-child(1) a').css('color','#fff');
  });

  $('.service-icon>div:nth-child(2)').mouseover(function(){
    $('.service-icon>div:nth-child(2) img').attr('src','images/icon-bus-y.png');
    $('.service-icon>div:nth-child(2) a').css('color','#ffd800');
  });
  $('.service-icon>div:nth-child(2)').mouseleave(function(){
    $('.service-icon>div:nth-child(2) img').attr('src','images/icon-bus.png');
    $('.service-icon>div:nth-child(2) a').css('color','#fff');
  });

  $('.service-icon>div:nth-child(3)').mouseover(function(){
    $('.service-icon>div:nth-child(3) img').attr('src','images/icon-tiket-y.png');
    $('.service-icon>div:nth-child(3) a').css('color','#ffd800');
  });
  $('.service-icon>div:nth-child(3)').mouseleave(function(){
    $('.service-icon>div:nth-child(3) img').attr('src','images/icon-tiket.png');
    $('.service-icon>div:nth-child(3) a').css('color','#fff');
  });

  $('.service-icon>div:nth-child(4)').mouseover(function(){
    $('.service-icon>div:nth-child(4) img').attr('src','images/icon-snap-y.png');
    $('.service-icon>div:nth-child(4) a').css('color','#ffd800');
  });
  $('.service-icon>div:nth-child(4)').mouseleave(function(){
    $('.service-icon>div:nth-child(4) img').attr('src','images/icon-snap.png');
    $('.service-icon>div:nth-child(4) a').css('color','#fff');
  });
    