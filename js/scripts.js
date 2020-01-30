$(document).ready(function(){

    $('.pro-cards .card').hover(function(){
        $(this).children('a').css("visibility", "visible");
    }, function(){
        $(this).children('a').css("visibility", "hidden");
    });

    $('.product-card .image-gallery img').click(function(){
        $('.main-img').attr('src', $(this).attr('src'))
    });


    /**show brands categories list **/
    $('.home-office .content-bar .head-bar').click(function(){
        $(this).next('.bar-content').slideToggle(500);
    });


    $('.cart .info .select-quantity .qu-type button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    /**show user account sections **/
    $('.user ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).children('a').data('value')).siblings('section').css('display', 'none');
        $($(this).children('a').data('value')).css('display', 'inline-block');
    });

});