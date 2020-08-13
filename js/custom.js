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

    var one_depth1 = $(".list_wrap").find("li:nth-child(1)");
    var one_depth5 = $(".list_wrap").find("li:nth-child(5)");
    var one_depth6 = $(".list_wrap").find("li:nth-child(6)");

    $(one_depth1).click(function(e){
        e.preventDefault()
       if(!$(".sub_menu").css('left','210px')){
            $(".sub_menu").css('left','210px')
       }else{
        $(".sub_menu").css('left','0px')
       }
       
    })

    $(one_depth5).click(function(){
        alert();
    })
    $(one_depth6).click(function(){
        alert();
    })


    $(".main_menu button").click(function(){
        $(".menu_wrap").css('display','none');
        $(".main_menu").css('left','-230px');
        // $("body").css('overflow-y','unset');
    })

    $(".myPage").mouseenter(function(){
        $(".open_mypage_wrap").fadeIn("fast")
        
    })
    $(".myPage").mouseleave(function(){
        $(".open_mypage_wrap").css('display','none');
    })

    
    // var slick_li =  $(".slick-dots").find("li");

    // slick_li.click(function(){
    //     $(slick_li).removeClass();
    //     $(this).addClass("slick-active");
    // })
   
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



    
    
});