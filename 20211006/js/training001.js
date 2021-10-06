$(function(){

    $(".제목").on("click",function(){
        $("h1").hide();
    });

    $("#오늘").on("click",function(){
        $("h1").show();
    });


    $(".버튼").on("click",function(){
        $("figure").toggleClass("on")
    });

});
