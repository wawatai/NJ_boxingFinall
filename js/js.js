//header
$(function(){
    $("header .checkBox .title").click(function(){
        $(this).next()
        .toggleClass("display");
    })

    $("header .checkBox label").on("change",function(){
        $(this)
        .addClass("active")
        .parent().siblings().find("label").removeClass("active");

        var n = $(this).next().text();
        $(this).parent().prevAll(".innerTitle")
        .text(""+ n +"");

        $("header .checkBox .title span")
        .text(""+ n +"");

            $("header .checkBox ul")
            .removeClass("display");
    })

    $("header .checkBox li").on("click",function(){
        $(this).find("label")
        .change();

        $("header .checkBox ul")
        .removeClass("display");
    })

    $(".rwd_TOPNav").click(function(){
        $(this)
        .children().toggleClass("display");

        $("main .center .left")
        .toggleClass("active");
    })
})

//time
function currentTime() {
    now = new Date();
    yy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    var curTime = document.getElementsByClassName('time');
    curTime[0].innerHTML = h+' : '+m+' : '+s;
    setTimeout('currentTime()',1000);

    if(h < 10)
    {
        curTime[0].innerHTML = '0'+h+' : '+m+' : '+s;
    }
    if(m < 10)
    {
        curTime[0].innerHTML = h+' : 0'+m+' : '+s;
    }
    if(s < 10)
    {
        curTime[0].innerHTML = h+' : '+m+' : 0'+s;
    }
}

//mainArea
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    var swiper02 = new Swiper('.swiper02', {
        autoHeight: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next02',
            prevEl: '.swiper-button-prev02',
          },
    });
 
    //gameTypeBox
    $(".gameTypeBox").click(function(){
        $(this)
        .addClass("active")
        .closest(".swiper-slide")
        .siblings()
        .find(".gameTypeBox")
        .removeClass("active");
    })

    //gBlock 投注
    $(".mainArea .pkTeam .betBtnLine button").click(function(){
        $(".mainArea .pkTeam .betBtnLine button")
        .removeClass("active");

        $(this)
        .addClass("active");

        $(".right")
        .addClass("active");

        $(".center .right .betTypeList li:first-child")
        .addClass("active");

        $(".right .betContent .betData")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //right
    $(".center .right .closeRight").click(function(){
        $(".right")
        .removeClass("active");
    })

    //2023-02-22 新增快速下注功能
    $(".betDetail .bdContent .top i").click(function(){
        $(".right .betContent>div")
        .toggleClass("display");

        $(".center .right .betTypeList li")
        .removeClass("active");

        $(".mainArea .pkTeam .betBtnLine button")
        .removeClass("active");
    })

    
    $(".right .betBlock .betContent .betData .betTotal li:first-child .quickBetBtn button").click(function(){
        var value = $(this).text();

        $(".right .betBlock .betContent .betData .bdOuter .betDetail .bdContent .betamount input")
        .val(value);
    })

    //2023-02-17 新增切換按鈕 不能點&&跳提示字
    $(document).on("click",".right .betBlock .betContent .changeBtn",function(){
        $(this)
        .toggleClass("active");

        $(".right .betBlock .betContent .betData .betTotal .okBtn")
        .toggleClass("disabled");

        $(".right .betBlock .betContent .betTotal li:first-child")
        .toggleClass("undisplay");

        $(".right .betBlock .betContent .betTotal li:nth-of-type(3) .amount")
        .toggleClass("undisplay")
        .next()
        .toggleClass("undisplay");
    })

    //2023-02-17 新增請稍等 投注成功彈窗
    $(".right .betBlock .betContent .betTotal .okBtn").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".right")
        .removeClass("active");

        $(".mainArea .gameContent .content .gBlock .down .pkTeam .betBtnLine button")
        .removeClass("active");

        $("body .filter")
        .addClass("display");

        $(".filter .jumpWindow.plzWait")
        .addClass("display");

        setTimeout(function(){
            $(".filter .jumpWindow.plzWait")
            .removeClass("display");

            $(".filter .jumpWindow.betState")
            .addClass("display");
        },1500);
    })
})

//betPage //2023-02-23 移除展開收起功能
$(function(){
    // $(".betPage table th").click(function(){
    //     $(this)
    //     .closest("table")
    //     .toggleClass("active");
    // })

    $(".betPage .history_bet .dataNum").click(function(){
        $(this).closest("li")
        .toggleClass("active");
    })

    $(".betPage .selectNav select").change(function(){
        $(".betPage .betBox")
        .toggleClass("display");
    })

})

//myResult //2023-02-23 + ↓
$(function(){
    var n = $("footer").prop("scrollHeight");

    if ($(window).width() <= 820)
    {
        $(".myResult")
        .css("bottom",""+ n +"px");

        
    } else {
        $(".myResult")
        .css("bottom","unset");
    }

    $(window).resize(function(){
        if ($(window).width() <= 820)
        {
            var n = $("footer").prop("scrollHeight");

            $(".myResult")
            .css("bottom",""+ n +"px");
        } else {
            $(".myResult")
            .css("bottom","unset");
        }
    })
})

//textHide 按了字會展開 //2023-02-24 移除此功能
// $(document).on("click","table p, th p",function(){
//     var length = $(this).text().length;

//     if ($(window).width() <= 500 && length > 3)
//     {
//         $(this)
//         .toggleClass("active");
//     }
// })

//gameRule //2023-02-23 + ↓

$(function(){
    $(".tagBtn").click(function(){
        var n = $(this).index();
        var tar = $(".chapterBlock:eq("+ (n + 1) +")");

        if ($(window).width() <= 500) 
        {
            $("html,body").animate({
                scrollTop: $(tar).offset().top - 80,
            },500);
        }
        else {
            $("html,body").animate({
                scrollTop: $(tar).offset().top - 150,
            },500);
        }
    })
})

//toTop
$(function(){
    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
            scrollTop: 0
        },500)
    })
})

//footer
$(function(){
    $("footer .lang>.flag").click(function(){
        $("footer .checkBox")
        .toggleClass("display");
    })

    $("footer .checkBox label").on("change",function(){
        $(this)
        .addClass("active")
        .parent().siblings().find("label").removeClass("active");

        $("footer .checkBox")
        .removeClass("display");
    })

    $("footer .checkBox li").on("click",function(){
        $(this).find("label")
        .change();

        $("footer .checkBox")
        .removeClass("display");
    })
})

//message
$(function(){
    $(".mailPage .messageBox li,.innerBox.mailPage.inner .backBtn").click(function(){
        $(".innerBox.mailPage")
        .toggleClass("display");

        $(this).find(".unread")
        .removeClass("display");
    })
})

//jumpWindow 
$(function(){
    $(".filter .jumpWindow .closeIC,.filter .jumpWindow .closeWindow,.filter .jumpWindow .submitBtn").click(function(){
        $(".filter")
        .removeClass("display");
    })

    //撤銷投注
    $(".cancelBtn").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.cancelBet")
        .addClass("display");
    })

    //投注結果
    $(".callgameType").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.chooseball")
        .addClass("display");
    })

    //2023-02-17 修改classname
    $(".calldate").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.choosedate")
        .addClass("display");
    })

    //選擇球種
    $(".jumpWindow.chooseball .content button").click(function(){
        var value = $(this).text();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".innerBox.betPage .selectNav .gameType p").text(value);

        $(".filter")
        .removeClass("display");
    })
    
    //選擇日期
    $(".jumpWindow.choosedate .content button").click(function(){
        var value = $(this).text();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".innerBox.betPage .selectNav .today").text(value);

        $(".filter")
        .removeClass("display");
    })
})