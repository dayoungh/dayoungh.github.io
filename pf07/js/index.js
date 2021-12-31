$(function(){

    // mopen ///
    $('.mopen').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });
  
   
    //  nav ///
    $('.depth02>li>a').on('click',function(){
        if($(window).width() < 769) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.depth03').slideUp();
        }
    });
    
    $('.depth01>li>a').on('click',function(){
        if($(window).width() < 769) {
            $('.inner').hide();
            $(this).next().toggle();
            
        }
    });
   
   
      // visual video ///
      $('#bgndVideo').YTPlayer({
        videoURL:'https://youtu.be/NpW0iz52lVs',
        containment:'#visual',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });
   
   
   
   
   
   
   
   
   
   
       // ---------------------------------------------
   });