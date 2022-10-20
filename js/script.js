"use script"
// код определяет на каком устройстве открыта страница
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/Windows/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// Бургер Меню
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
// Бургер Меню Убераем при нажатии вне его
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".menu_body").length == 0 && $target.closest(".menu_icon").length == 0) {
    $(".menu_body").removeClass("_active");
    $(".menu_icon").removeClass("_active");
    $("body").removeClass("_lock");
  }
});

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
};

$(function() {
  let header = $('.header');
  let hederHeight = header.height(); // вычисляем высоту шапки
  let mobileTel = $('.header__tel').first();  // сохранем в переменную первый элемент с классом header__tel
 
  if($(this).scrollTop() > 500) {
    mobileTel.fadeOut();
  } else {
    mobileTel.fadeIn();
  }
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header_fixed');
     $('body').css({
        'paddingTop': hederHeight+'px', // делаем отступ у body, равный высоте шапки
        // 'transition': '1s'

      });
    } else {
     header.removeClass('header_fixed');
     $('body').css({
      'paddingTop': 0, // удаляю отступ у body, равный высоте шапки
      // 'transition': '1s'
    })
    }
  });
  
 });




var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    // loop: true,
    navigation: {
      nextEl: ".custom-next,.swiper-button-next",
      prevEl: ".custom-prev,.swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    // loop: true,
    grabCursor: true,
    simulateTouch: true,
    initialSlide: 0,
breakpoints: {
        320: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });
    var swiper = new Swiper(".partners_container", {
      slidesPerView: 1,
      // loop: true,
      grabCursor: true,
      simulateTouch: true,
      initialSlide: 0,
      // centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1.3,
        },
      },
      });
  