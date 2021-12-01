$(function(){
    // ------------------------

    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
         $('#header').addClass('on')
        }else{
         $('#header').removeClass('on')
        }
    });




    $('#bgndVideo').YTPlayer({
        videoURL:'https://youtu.be/eZOInt9eMek',
        containment:'#visual',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });




    $('.mopen').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });
    
    
    $('.depth01>li>a').on('click',function(){
        if($(window).width() < 769) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.depth02').slideUp();
        }
    });


    $('.pr_slider').slick({
        arrows:false,
        slidesToShow:3,
        autoplay:false,
        autoplaySpeed:2000,
        pauseOnFocus:false,
        pauseOnHover:false,
    });


    $('.pr_slider figure').eq(4).addClass('on')
    $('.pr_slider').on('afterChange',function(e,s,c){
        
       $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');

    });












    // ------------------------
});