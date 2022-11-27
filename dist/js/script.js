$(function() {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="header__slider_arrows header__slider_arrows-left" src="icons/arrows/arrow_left.svg" alt="arrow">',
        nextArrow: '<img class="header__slider_arrows header__slider_arrows-right" src="icons/arrows/arrow_right.svg" alt="arrow">',
        asNavFor: '.header__dots ',
    });

    $('.header__dots').slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });
    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="header__slider_arrows header__slider_arrows-left" src="icons/arrows/arrow_left.svg" alt="arrow">',
        nextArrow: '<img class="header__slider_arrows header__slider_arrows-right" src="icons/arrows/arrow_right.svg" alt="arrow">',
    });
});


