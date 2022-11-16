$(function() {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="header__slider_arrows header__slider_arrows-left" src="icons/arrow_left.svg" alt="arrow">',
        nextArrow: '<img class="header__slider_arrows header__slider_arrows-right" src="icons/arrow_right.svg" alt="arrow">'
    });
});