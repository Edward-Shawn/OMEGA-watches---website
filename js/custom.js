$(document).ready(function(){
    

    $(".menu").click(function(){
        $(".menu_wrap").fadeIn("fast")
        $(".main_menu").css('left','0');
        // $("body").css('overflow-y','hidden')
        $(".menu_wrap").on('scroll mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        })

    })

    $(".main_menu button").click(function(){
        $(".menu_wrap").css('display','none');
        $(".main_menu").css('left','-230px');
        // $("body").css('overflow-y','unset');
    })
});