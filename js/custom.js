$(document).ready(function(){

  
    $(".menu").click(function(){

        $(".menu_wrap").fadeIn("fast");
        $(".main_menu").css('left','0');
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

    
    
    $(".menu_wrap").click(function(){
        $(".main_menu").css('left','-100%');
        $(".menu_wrap").css('display','none');
        $(".list_menus").removeClass("on");
        $(submenu).removeClass("on");
    })
    

    $(".main_menu button").click(function(){
        $(".menu_wrap").css('display','none');
        $(".main_menu").css('left','-100%');
        $(".list_menus").removeClass("on");
        $(submenu).removeClass("on");
    })


    $(".myPage").mouseenter(function(){
        $(".open_mypage_wrap").fadeIn("fast")
        
    })
    $(".myPage").mouseleave(function(){
        $(".open_mypage_wrap").css('display','none');
    })

    $(".close").click(function(){
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


    var submenu_enter = $(".list_menus");
    var submenu = $(".sub_menu");


    submenu_enter.click(function(e){
        e.preventDefault();
       
        if(windowWidth > 960){
                if(!$(this).hasClass("on")){
                    submenu_enter.removeClass("on");
                    $(this).addClass("on");
                    $(submenu_enter).find("div").removeClass("on");
                    $(this).find("div").addClass("on");
                }else {
                    $(this).removeClass("on");
                    $(submenu_enter).find("div").removeClass("on");
                }
        }else{
            return false;
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


    

        
    $(".sliders_dot li").click(function(){
        $(".sliders_dot li").removeClass();
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        }else{
            $(this).removeClass("active");
        }
    })
        
    

    if(windowWidth < 640){
        $(".close").css('display','block');
      }else{
        $(".close").css('display','none');
      }

    
    var windowWidth = $(window).width();
   
    if(windowWidth < 1280){
        $(".sliders_dot").css('display','block');
      }
   
    $(window).resize(function(){

        var windowWidth = $(window).width();

          if(windowWidth < 1280){
            $(".sliders_dot").css('display','block');
          }else{
            
            $(".sliders_dot").css('display','none');
          }

        
      
          if(windowWidth < 960){
            $(".sub_menu").css('display','none');
          }else{
            $(".sub_menu").css('display','table');
          }
          
          if(windowWidth < 640){
            $(".close").css('display','block');
          }else{
            $(".close").css('display','none');
          }
         
    })

});