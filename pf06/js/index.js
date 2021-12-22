$(function(){
  // -----------------------------------------------
  
  
  
  var main=$('#main').fullpage({
      anchors:['con01','con02','con03','con04','con05','footer'],
      css3:false,     //background-attachment :fixed 활성화,
      // navigation:true,
      afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        // console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.pg_nav li').eq(idx).addClass('on').siblings().removeClass('on');
        destination.index==0 ? $('.header').removeClass('on') : $('.header').addClass('on');
      },
      responsiveWidth: 769, 
  });


  
  // main_slider //
  $('.main_slider').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    pauseOnFocus:false,
    
  });

  $('.main_slider figure').eq(1).addClass('on');
  $('.main_slider').on('afterChange',function(e,s,c){
    // console.log(c);
  $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
   });

  
    // mopen ///
    $('.mopen').on('click',function(){
      $(this).toggleClass('on');
      $('.gnb').toggleClass('on');
   });


    // nav ///
    $('.depth01>li>a').on('click',function(){
      if($(window).width() < 769) {
          $(this).next().stop().slideToggle();
          $(this).parent().siblings().find('.depth02').slideUp();
      }
   });
  
  
  
  
  
  
  
  
  
  // -----------------------------------------------
  });