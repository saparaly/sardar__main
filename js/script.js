/*nav*/
const hamburger = document.querySelector(".hamburger");
const headerNavLinks = document.querySelector(".header__nav__links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active-nav");
    headerNavLinks.classList.toggle("active-nav");
})

document.querySelectorAll(".header__list__item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove(".active-nav");
    headerNavLinks.classList.remove(".active-nav");

}))

/* modal btn */
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

/** */
$('.news__cards').slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots slider__dots',
    customPaging: function(slider, i) {
        return '<button> <svg class="svg-dots" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="white"/></svg> </button>';
    },
    prevArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.793 0.5L78.7929 49.5H0.5V0.5H127.793Z" stroke="#C4C4C4"/><path d="M29.4697 24.4697C29.1768 24.7626 29.1768 25.2374 29.4697 25.5303L34.2426 30.3033C34.5355 30.5962 35.0104 30.5962 35.3033 30.3033C35.5962 30.0104 35.5962 29.5355 35.3033 29.2426L31.0607 25L35.3033 20.7574C35.5962 20.4645 35.5962 19.9896 35.3033 19.6967C35.0104 19.4038 34.5355 19.4038 34.2426 19.6967L29.4697 24.4697ZM70 24.25H30V25.75H70V24.25Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick_arrow slick-next"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0H129V50H0L50 0Z" fill="#FF7400"/><path d="M99.5303 24.4697C99.8232 24.7626 99.8232 25.2374 99.5303 25.5303L94.7574 30.3033C94.4645 30.5962 93.9896 30.5962 93.6967 30.3033C93.4038 30.0104 93.4038 29.5355 93.6967 29.2426L97.9393 25L93.6967 20.7574C93.4038 20.4645 93.4038 19.9896 93.6967 19.6967C93.9896 19.4038 94.4645 19.4038 94.7574 19.6967L99.5303 24.4697ZM59 24.25H99V25.75H59V24.25Z" fill="white"/></svg></button>',
    appendArrows: '.news__cards--arrows',
    responsive: [{
            breakpoint: 1460,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1160,
            settings: {
                slidesToShow: 2,

                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 692,
            settings: {
                slidesToShow: 1,

                slidesToScroll: 1,
            },
        }
    ]
});


$('.steps__cards').slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots slider__dots',
    customPaging: function(slider, i) {
        return '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#31353D"/></svg>';
    },
    prevArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.793 0.5L78.7929 49.5H0.5V0.5H127.793Z" stroke="#4D5460"/><path d="M29.4697 24.4697C29.1768 24.7626 29.1768 25.2374 29.4697 25.5303L34.2426 30.3033C34.5355 30.5962 35.0104 30.5962 35.3033 30.3033C35.5962 30.0104 35.5962 29.5355 35.3033 29.2426L31.0607 25L35.3033 20.7574C35.5962 20.4645 35.5962 19.9896 35.3033 19.6967C35.0104 19.4038 34.5355 19.4038 34.2426 19.6967L29.4697 24.4697ZM70 24.25H30V25.75H70V24.25Z" fill="#4D5460"/></svg></button>',
    nextArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0H129V50H0L50 0Z" fill="#FF7400"/><path d="M99.5303 24.4697C99.8232 24.7626 99.8232 25.2374 99.5303 25.5303L94.7574 30.3033C94.4645 30.5962 93.9896 30.5962 93.6967 30.3033C93.4038 30.0104 93.4038 29.5355 93.6967 29.2426L97.9393 25L93.6967 20.7574C93.4038 20.4645 93.4038 19.9896 93.6967 19.6967C93.9896 19.4038 94.4645 19.4038 94.7574 19.6967L99.5303 24.4697ZM59 24.25H99V25.75H59V24.25Z" fill="white"/></svg></button>',
    appendArrows: '.steps__cards--arrows',
    responsive: [{
        breakpoint: 1260,
        settings: {
            slidesToShow: 2,
        },
    }, {
        breakpoint: 692,
        settings: {
            slidesToShow: 1,

            slidesToScroll: 1,
        },
    }]

});

/** */
function mobileOnlySlider() {
    $('.benefits__container').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.793 0.5L78.7929 49.5H0.5V0.5H127.793Z" stroke="#4D5460"/><path d="M29.4697 24.4697C29.1768 24.7626 29.1768 25.2374 29.4697 25.5303L34.2426 30.3033C34.5355 30.5962 35.0104 30.5962 35.3033 30.3033C35.5962 30.0104 35.5962 29.5355 35.3033 29.2426L31.0607 25L35.3033 20.7574C35.5962 20.4645 35.5962 19.9896 35.3033 19.6967C35.0104 19.4038 34.5355 19.4038 34.2426 19.6967L29.4697 24.4697ZM70 24.25H30V25.75H70V24.25Z" fill="#4D5460"/></svg></button>',
        nextArrow: '<button type="button" class="slick_arrow slick-next"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0H129V50H0L50 0Z" fill="#FF7400"/><path d="M99.5303 24.4697C99.8232 24.7626 99.8232 25.2374 99.5303 25.5303L94.7574 30.3033C94.4645 30.5962 93.9896 30.5962 93.6967 30.3033C93.4038 30.0104 93.4038 29.5355 93.6967 29.2426L97.9393 25L93.6967 20.7574C93.4038 20.4645 93.4038 19.9896 93.6967 19.6967C93.9896 19.4038 94.4645 19.4038 94.7574 19.6967L99.5303 24.4697ZM59 24.25H99V25.75H59V24.25Z" fill="white"/></svg></button>',
        appendArrows: '.benefits__cards__arrows'
    });
    console.log('123')

}

let sliderMain = document.querySelector('.benefits__container');
if (sliderMain) {
    if (window.innerWidth < 593) {
        mobileOnlySlider();
    }
}


$(window).resize(function(e) {
    if (window.innerWidth < 593) {
        if (!$('.benefits__container').hasClass('slick-initialized')) {
            mobileOnlySlider();
        }

    } else {
        if ($('.benefits__container').hasClass('slick-initialized')) {
            $('.benefits__container').slick('unslick');
        }
    }
});



/*tabs */
document.addEventListener('DOMContentLoaded', () => {
    function tabsMain() {
        let descParentTabs = document.querySelector('.tab-head')
        let btn = document.querySelectorAll('.tablink');
        let block = document.querySelectorAll('.tabcontent');
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                    item.animate([
                        { opacity: '0' },
                        { opacity: '1' }
                    ], { duration: 200, easing: 'ease-in' })
                });
            });
        });

        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('tablink')) {
                btn.forEach(item => {
                    item.classList.remove('tab-active')
                })
            }
            target.classList.add('tab-active')
        });
    }
    tabsMain();
})

/*arrow tabs */
// document.addEventListener('DOMContentLoaded', () => {
//     function tabsMainA() {
//         let descParentTabs = document.querySelector('.tab-head')
//         let btn = document.querySelectorAll('.tablink');
//         let block = document.querySelectorAll('.slick_arrow');

//         btn.forEach((key, index) => {
//             key.addEventListener('click', function() {
//                 block.forEach((item, itemindex) => {
//                     item.classList.toggle('activea', index === itemindex)
//                     item.animate([
//                         { opacity: '0' },
//                         { opacity: '1' }
//                     ], { duration: 200, easing: 'ease-in' })
//                 });
//             });
//         });

//         descParentTabs.addEventListener('click', (e) => {
//             const target = e.target
//             if (target.classList.contains('tablink')) {
//                 btn.forEach(item => {
//                     item.classList.remove('tab-active')
//                 })
//             }
//             target.classList.add('tab-active')
//         });
//     }
//     tabsMainA();
// })

/**slider for tabs */
var helpers = {
    addZeros: function(n) {
        return (n < 10) ? '0' + n : '' + n;
    }
};

/**first tab */
function sliderInit() {
    var $slider = $('.tab__slider');

    $($slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: `<button type="button" class="slick_arrow slick-prev "><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.793 0.5L78.7929 49.5H0.5V0.5H127.793Z" stroke="#C4C4C4"/><path d="M29.4697 24.4697C29.1768 24.7626 29.1768 25.2374 29.4697 25.5303L34.2426 30.3033C34.5355 30.5962 35.0104 30.5962 35.3033 30.3033C35.5962 30.0104 35.5962 29.5355 35.3033 29.2426L31.0607 25L35.3033 20.7574C35.5962 20.4645 35.5962 19.9896 35.3033 19.6967C35.0104 19.4038 34.5355 19.4038 34.2426 19.6967L29.4697 24.4697ZM70 24.25H30V25.75H70V24.25Z" fill="white"/></svg></button>`,
        nextArrow: '<button type="button" class="slick_arrow slick-next "><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0H129V50H0L50 0Z" fill="#FF7400"/><path d="M99.5303 24.4697C99.8232 24.7626 99.8232 25.2374 99.5303 25.5303L94.7574 30.3033C94.4645 30.5962 93.9896 30.5962 93.6967 30.3033C93.4038 30.0104 93.4038 29.5355 93.6967 29.2426L97.9393 25L93.6967 20.7574C93.4038 20.4645 93.4038 19.9896 93.6967 19.6967C93.9896 19.4038 94.4645 19.4038 94.7574 19.6967L99.5303 24.4697ZM59 24.25H99V25.75H59V24.25Z" fill="white"/></svg></button>',
        appendArrows: '.q__arrows'

    });


    $slider.each(function() {
        var $sliderParent = $(this).parent();

        if ($(this).find('.tab__item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function(event, slick, currentSlide) {
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));


    });


};
sliderInit();




// /**2nd tab */
// function sliderInitTwo() {
//     var $slider = $('.tab__slider--2');
//     $slider.each(function() {
//         var $sliderParent = $(this).parent();
//         $(this).slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             fade: true,
//             dots: false,
//             infinite: true,
//             prevArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.793 0.5L78.7929 49.5H0.5V0.5H127.793Z" stroke="#C4C4C4"/><path d="M29.4697 24.4697C29.1768 24.7626 29.1768 25.2374 29.4697 25.5303L34.2426 30.3033C34.5355 30.5962 35.0104 30.5962 35.3033 30.3033C35.5962 30.0104 35.5962 29.5355 35.3033 29.2426L31.0607 25L35.3033 20.7574C35.5962 20.4645 35.5962 19.9896 35.3033 19.6967C35.0104 19.4038 34.5355 19.4038 34.2426 19.6967L29.4697 24.4697ZM70 24.25H30V25.75H70V24.25Z" fill="white"/></svg></button>',
//             nextArrow: '<button type="button" class="slick_arrow slick-next"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0H129V50H0L50 0Z" fill="#FF7400"/><path d="M99.5303 24.4697C99.8232 24.7626 99.8232 25.2374 99.5303 25.5303L94.7574 30.3033C94.4645 30.5962 93.9896 30.5962 93.6967 30.3033C93.4038 30.0104 93.4038 29.5355 93.6967 29.2426L97.9393 25L93.6967 20.7574C93.4038 20.4645 93.4038 19.9896 93.6967 19.6967C93.9896 19.4038 94.4645 19.4038 94.7574 19.6967L99.5303 24.4697ZM59 24.25H99V25.75H59V24.25Z" fill="white"/></svg></button>',
//             appendArrows: '.sec__arrows'
//         });

//         if ($(this).find('.tab__item--2').length > 1) {
//             $(this).siblings('.slides-numbers').show();
//         }

//         $(this).on('afterChange', function(event, slick, currentSlide) {
//             $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
//         });

//         var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
//         $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

//     });
// };
// sliderInitTwo();

// /**3 tab */
// function sliderInitThree() {
//     var $slider = $('.tab__slider--3');
//     $slider.each(function() {
//         var $sliderParent = $(this).parent();
//         $(this).slick({
//             fade: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: false,
//             infinite: true,
//             prevArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.793 0.5L78.7929 49.5H0.5V0.5H127.793Z" stroke="#C4C4C4"/><path d="M29.4697 24.4697C29.1768 24.7626 29.1768 25.2374 29.4697 25.5303L34.2426 30.3033C34.5355 30.5962 35.0104 30.5962 35.3033 30.3033C35.5962 30.0104 35.5962 29.5355 35.3033 29.2426L31.0607 25L35.3033 20.7574C35.5962 20.4645 35.5962 19.9896 35.3033 19.6967C35.0104 19.4038 34.5355 19.4038 34.2426 19.6967L29.4697 24.4697ZM70 24.25H30V25.75H70V24.25Z" fill="white"/></svg></button>',
//             nextArrow: '<button type="button" class="slick_arrow slick-next"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0H129V50H0L50 0Z" fill="#FF7400"/><path d="M99.5303 24.4697C99.8232 24.7626 99.8232 25.2374 99.5303 25.5303L94.7574 30.3033C94.4645 30.5962 93.9896 30.5962 93.6967 30.3033C93.4038 30.0104 93.4038 29.5355 93.6967 29.2426L97.9393 25L93.6967 20.7574C93.4038 20.4645 93.4038 19.9896 93.6967 19.6967C93.9896 19.4038 94.4645 19.4038 94.7574 19.6967L99.5303 24.4697ZM59 24.25H99V25.75H59V24.25Z" fill="white"/></svg></button>',
//             appendArrows: '.third__arrows'
//         });

//         if ($(this).find('.tab__item--3').length > 1) {
//             $(this).siblings('.slides-numbers').show();
//         }

//         $(this).on('afterChange', function(event, slick, currentSlide) {
//             $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
//         });

//         var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
//         $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

//     });
// };
// sliderInitThree();



$('.gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,

    centerMode: true,
    centerPadding: '250px',
});

$('.partner__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.793 0.5L78.7929 49.5H0.5V0.5H127.793Z" stroke="#4D5460"/><path d="M29.4697 24.4697C29.1768 24.7626 29.1768 25.2374 29.4697 25.5303L34.2426 30.3033C34.5355 30.5962 35.0104 30.5962 35.3033 30.3033C35.5962 30.0104 35.5962 29.5355 35.3033 29.2426L31.0607 25L35.3033 20.7574C35.5962 20.4645 35.5962 19.9896 35.3033 19.6967C35.0104 19.4038 34.5355 19.4038 34.2426 19.6967L29.4697 24.4697ZM70 24.25H30V25.75H70V24.25Z" fill="#4D5460"/></svg></button>',
    nextArrow: '<button type="button" class="slick_arrow slick-prev"><svg width="129" height="50" viewBox="0 0 129 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0H129V50H0L50 0Z" fill="#FF7400"/><path d="M99.5303 24.4697C99.8232 24.7626 99.8232 25.2374 99.5303 25.5303L94.7574 30.3033C94.4645 30.5962 93.9896 30.5962 93.6967 30.3033C93.4038 30.0104 93.4038 29.5355 93.6967 29.2426L97.9393 25L93.6967 20.7574C93.4038 20.4645 93.4038 19.9896 93.6967 19.6967C93.9896 19.4038 94.4645 19.4038 94.7574 19.6967L99.5303 24.4697ZM59 24.25H99V25.75H59V24.25Z" fill="white"/></svg></button>',
    appendArrows: '.partners__arrows'
});

document.querySelectorAll('.tablink').forEach(el => {

    el.addEventListener('click', () => {
        const arrowsQ = document.querySelectorAll('.q__arrows button')

        if (el.innerText == 'архитектура') {
            arrowsQ.forEach(el => {
                el.classList.remove('active')
            })
            arrowsQ[2].classList.add('active')
            arrowsQ[3].classList.add('active')

        } else if (el.innerText == 'инфраструктура') {
            arrowsQ.forEach(el => {
                el.classList.remove('active')
            })
            arrowsQ[1].classList.add('active')
            arrowsQ[4].classList.add('active')
        } else if (el.innerText == 'интерьер') {
            arrowsQ.forEach(el => {
                el.classList.remove('active')
            })
            arrowsQ[0].classList.add('active')
            arrowsQ[5].classList.add('active')
        }
        arrowsQ.forEach(el => {
            el.style.display = 'none';
        })
    })
})
document.querySelectorAll('.tablink')[0].click()