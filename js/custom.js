$(document).ready(function(){
    var bannerBtn = $(".banner_btn").height();
    var winWidth = $(window).height();

    $(window).resize(function(){
        if($(window).width()>1300){
            $(".banner_wrap").height(winWidth-bannerBtn);
        } else {
            $(".banner_wrap").css("height", "auto");
        }
    });


});