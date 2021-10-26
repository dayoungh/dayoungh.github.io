$(function(){

    // 메인슬라이드
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
       });


    //    제품슬라이드
    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 5,
        dots:true,
    });

 $('#content01 .btn i.xi-angle-left-thin').on('click',function(){
$('.pr_slider').slick('slickPrev');
 });

 $('#content01 .btn i.xi-angle-right-thin').on('click',function(){
    $('.pr_slider').slick('slickNext');
     });

});
