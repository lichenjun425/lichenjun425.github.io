/**
 * Created by JZ on 2017/7/7.
 */
//顶部滚动条的事件
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 72) {
            $('#topNav').css({
                backgroundColor: "rgba(0, 0, 0,.7)"
            });
            $('.one').css({
                transform: "translateY(-50%)"
            })

        } else {
            $('#topNav').css({
                backgroundColor: "rgba(0, 0, 0, 0)"
            });
            $('.one').css({
                transform: "translateY(0%)"
            })

        }

    });
//输入框事件
    $(".last a").on("mouseover", function () {
        $(".last img").css({
            transition: "all .3s linear",
            transform: "translateX(-200px)"
        });
        $(".last input").css({
            transition: "all 1s ease-in",
            display: "block"
            // animation: "show .1s linear"
        });
    });
//
    $('.navLeft img').on("mouseover", function () {

        $('.navLeft img').css({
            transition: "all .5s ease-in",
            transform: "scale(1.1)"
        })

    });

    //遮罩显示
    $("#mainBusiness li").on("mouseover", function () {
        $('.mask').css({
            display: "none"
        });
        $(this).children(".mask").css({
            display: "block"
        })
    })

//choose us轮播
//     var index=0
//     setInterval(function () {
//         index++;
//         index%=4;
//         console.log(index);
//         $('#aboutUs .box li').animate({
//             opacity:"0"
//         }).eq(index).animate({
//             opacity:"1"
//         });
//     },3000);

    $("#aboutUs .index a").each(function (inx) {
        $(this).on("click", function () {
            console.log(inx);
            $("#aboutUs .index a").removeClass('showIn');
            $(this).addClass('showIn');

            $('#aboutUs .box li').css({
                opacity: "0"
            }).eq(inx).animate({
                opacity: "1"
            });

        });
    });


});

