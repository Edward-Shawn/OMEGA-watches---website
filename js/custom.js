$(document).ready(function(){

   


    $(".menu").click(function(){
        $(".menu_wrap").fadeIn("fast");
        $(".main_menu").css('left','0');
        // $("body").css('overflow-y','hidden')
        $(".menu_wrap").on('scroll mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $(".main_menu button").css('display','flex');
        
    })
    $(".main_menu button").click(function(){
        $(this).hide();
    })

    // $(".menu_wrap").on("click", function(){
    //     $(".menu_wrap").css('display','none');
    //     $(".main_menu").css('left','-230px');
    //     $(".list_menus").removeClass("on");
    //     $(submenu).removeClass("on");
    // });

    $(".menu_wrap").click(function(){
        
        $(".menu_wrap").css('display','none');
        $(".main_menu").css('left','0');
        $(".list_menus").removeClass("on");
        $(submenu).removeClass("on");
    })
    

    $(".main_menu button").click(function(){
        $(".menu_wrap").css('display','none');
        $(".main_menu").css('left','-100%');
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

    // email input

    $(".control, .placeholder").click(function(){
        if($(".submit_box").focus()){
            $(".placeholder").addClass("on");
        }
    })
   
    
    $(document).click(function(e){
        if($(e.target).closest(".control, .placeholder").length != 0){
            return false;
            
        }else if(!$(".submit_box").val()){
            
            $(".placeholder").removeClass("on");
        }
    });
        
   
        
    

});