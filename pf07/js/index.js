$(function(){

    // mopen ///
    $('.mopen').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('#header').toggleClass('on');
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


    // 공지사항 ticker_02 //
    function tick2(){
		$('#ticker_02 li:first').slideUp( function () { $(this).appendTo($('#ticker_02')).slideDown(); });
	}
	setInterval(function(){ tick2 () }, 2000);

   
    // news slider //
    $(".news_slider").slick({
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        // vertical:true,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            // vertical:false,
            }
        },
    
        ]
    });

    // result slider //
    $(".result_slider").slick({
        autoplay:true,
        arrows:false,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        vertical:true,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 1,
            // vertical:false,
            }
        },
    
        ]
    });











    // to top & scroll_banner
    $('#scroll_banner li:nth-child(9)').on('click',function(){
        $('html,body').animate({scrollTop:0},600);
    });

    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        if(sct>1500) {$('#scroll_banner li:nth-child(9)').fadeIn()
    }else{
        $('#scroll_banner li:nth-child(9)').fadeOut()
    }

    $('#scroll_banner').css({top:300+sct})

    });


   
   
   
   
   
   
   
       // ---------------------------------------------
   });