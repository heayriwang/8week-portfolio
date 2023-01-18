$(function () {


    // 헤더부분
    $('#header .search_toggle button').on('click', function () {
        // $('.header .search').slideToggle();
        $('#header .search').toggleClass('on');
    })




    // 메인슬라이드 부분
    $('.mainSlide').on('init afterChange', function (e, s, c) {
        //c = 0,1,2
        var current = $('.mainSlide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('#mainVisual .main_slide_dots li').removeClass('on');
        $('#mainVisual .main_slide_dots li').eq(c ? c : 0).addClass('on');
    });

    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('#mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainSlide').slick('slickGoTo', idx);
    });

    $('#mainVisual .main_slide_dots li').on('click', function () {
        $('#mainVisual .main_slide_dots li').removeClass('on');
        $(this).addClass('on');

    });


    // 슬라이드 탭 부분
    $('#slideTab .menu>li').on('click', function () {
        var idx = $(this).index();
        $('#slideTab .con>div').removeClass('on');
        $('#slideTab .con>div').eq(idx).addClass('on');

        $('#slideTab .menu>li').removeClass('on');
        $(this).addClass('on');
    })



})