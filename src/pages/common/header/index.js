// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";
import "wowjs/css/libs/animate.css";
$(window).scroll(function(){
    const scrollTop = $(window).scrollTop();
    if(scrollTop > 50){
        $(".pc-header").addClass("active");
    }else{
        $(".pc-header").removeClass("active");
    }
})

$(".menu").on("click", function(){
    $(this).toggleClass("on");
    $(".m-header .nav-container").slideToggle();
})