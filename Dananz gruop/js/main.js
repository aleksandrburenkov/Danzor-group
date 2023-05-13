'use strict';

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.header__top__nav');
navBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('nav__mobile');
    document.body.classList.toggle('no-scroll');
};

// Nav-icon

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true, 
        margin: 10, 
        nav: false, 
        autoplay: true, 
        smartSpeed: 2000, 
        autoplayTimeout: 3000, 
        autoHeight: true,
        responsive: {
          
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 1,
            },
        },
    });
});
let maskMap = {
    ru: '+7(999) 999-99-99',
    us: '+38(999) 999-99-99',
};

$('.phone').mask('+7(999)999-99-99');

$('select').change(function () {
    let phoneMask = maskMap[this.value];
    $('.phone').mask(phoneMask);
    $('.phone').val('').focus();
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        let range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$('input[type="tel"]').click(function () {
    $(this).setCursorPosition(4); // set position number
});

// -------------------------------------------------------------------------------------------------------------------------
