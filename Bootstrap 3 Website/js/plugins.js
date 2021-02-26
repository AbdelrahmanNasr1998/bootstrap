$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000
    });

    // Nice Scroll

    $("html").niceScroll();

    // Show Color Option When Click On The Icon

    $(".paints").click(function(){
    $(".color-option").fadeToggle();
    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor","#E41B17").end()
        .eq(1).css("backgroundColor","#0895D1").end()
        .eq(2).css("backgroundColor","#03b100").end()
        .eq(3).css("backgroundColor","#e87600").end()
        .eq(4).css("backgroundColor","#fff700").end()
        .eq(5).css("backgroundColor","#d00069").end()
        .eq(6).css("backgroundColor","#6600cc");

    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

    // Scroll Top

    var scrollButton = $("#scroll-top")
    $(Window).scroll(function(){

        // First Code >> Short If

        $(this).scrollTop() >= 700? scrollButton.show() : scrollButton.hide();

        // Second Code >> Noraml If

        // if($(this).scrollTop()>=700)
        // {
        //     scrollButton.show();
        // }
        // else
        // {
        //     scrollButton.hide();
        // }

    });

    // Click To Scroll Up

    scrollButton.click(function()
    {
        $("html,body").animate({scrollTop:0},600);
    });

});

