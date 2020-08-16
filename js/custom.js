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
        $(submenu).removeClass("on");
    })

    $(".myPage").mouseenter(function(){
        $(".open_mypage_wrap").fadeIn("fast")
        
    })
    $(".myPage").mouseleave(function(){
        $(".open_mypage_wrap").css('display','none');
    })

   
    $(".indicator_play").click(function(){

        if(!$(this).hasClass("paused")){
            $(this).addClass("paused");
            stopTimer()
        }else{
            $(this).removeClass("paused");
            startTimer()
        }
    })
    
    function stopTimer(){
        clearInterval(timer);
    }


    var submenu_enter = $(".list_wrap").find("li");
    var submenu = $(".sub_menu");

    submenu_enter.click(function(e){
        e.preventDefault();
       
        
        if(!$(this).hasClass("on")){
            submenu_enter.removeClass("on");
            $(this).addClass("on");
            $(submenu_enter).find("div").removeClass("on");
            $(this).find("div").addClass("on");
            
        }else {
            $(this).removeClass("on");
            $(submenu_enter).find("div").removeClass("on");
        }
        
       
        
    })

});