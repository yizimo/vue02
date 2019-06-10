$('.home-full-banner').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: true
});

+function () {
    var bigH=$('.side-category').height();
    $(window).on('scroll resize load',function () {
        var sTop=$(this).scrollTop(),
            valve=$('.home-full-banner').offset().top+$('.home-full-banner').height(),
            wH=$(this).height();

        //控制导航显示
        if (sTop>valve) {
            $('.side-category').show();
        }
        else {
            $('.side-category').hide();
        }
    })
}();
zAction.add({
    'category-toggle':function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on').prev().slideDown(200);
        }
        else {
            $(this).addClass('on').prev().slideUp(200);
        }
    },

});
