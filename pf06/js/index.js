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
      destination.index==0 ? $('.header').removeClass('on') : $('.header').addClass('on');
      $('.top_banner i').on('click',function(){
        $('.top_banner').slideUp();
      });
     
    },
});















// -----------------------------------------------
});