$(function(){
  // -----------------------------------------------
  
 
  
  var main=$('#main').fullpage({
      anchors:['con01','con02','con03','con04','con05','footer'],
      css3:false,     //background-attachment :fixed 활성화,
      responsiveWidth: 769, 
     
    
      afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        // console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.pg_nav li').eq(idx).addClass('on').siblings().removeClass('on');
        destination.index==0 ? $('.header').removeClass('on') : $('.header').addClass('on');
        
        
      },
      
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
  
  
  
    // txt_slide //
    $('.txt_slide').slick({
      arrows:false,
      dots:false,
      slidesToShow:3,
      autoplay:true,
      autoplaySpeed:2500,
      pauseOnHover:false,
      pauseOnFocus:false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            // dots:true,
          }
        },
   
      ]
      
    });

    //scroll event //
    const SEC = document.querySelectorAll('.action');
    const WT=window.innerHeight;

     window.addEventListener("scroll", ()=>{
        let sct=window.scrollY;
        SEC.forEach(e=>{
            let secTop = e.offsetTop;
            let secH=e.clientHeight;
            sct > secTop -(WT-secH)/2 -200 ? e.classList.add('on') : e.classList.remove('on');
        });
     });


   


       // tab //
      $('.tab_menu li').on('click',function(){
        var idx=$(this).index();
        // $('.tab_cont>div').eq(idx).show().siblings().hide();
        $('.tab_cont>div').eq(idx).addClass('on').siblings().removeClass('on');
       });
    


    // $('.tab_slider').on('afterChange', function(e,s,c){
    //   $('.tab_menu li').eq(c).addClass('on').siblings().removeClass('on');
        
    // })


    // video slider //
    $(".video_slider").slick({
      autoplay:true,
      autoplaySpeed:3000,
      pauseOnHover:false,
      pauseOnFocus:false,
      dots:true,
      arrows:false,
    
  });


    $('.con04 .arrows .xi-angle-left').on('click',function(){
      $('.video_slider').slick('slickPrev')
       });
   
    $('.con04 .arrows .xi-angle-right').on('click',function(){
       $('.video_slider').slick('slickNext')
      });


      // 달력 //
      $(function() {
        $( "#datepicker" ).datepicker({
            inline: true,
            showOtherMonths: true,
            showMonthAfterYear: true,
            monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
        });
    });




    
  
  
  
  // -----------------------------------------------
  });