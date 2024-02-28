const infoBtns = document.querySelectorAll('.info_dot')
const infoHints = document.querySelectorAll('.info_hint')

for (let btn of infoBtns) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        for (let hint of infoHints) {
            hint.classList.add('none')
        }
        this.parentNode
            .querySelector('.info_hint')
            .classList.toggle('none')
    }
    )
}

document.addEventListener('click',
    function () {
        for (let hint of infoHints) {
            hint.classList.add('none')
        }
    })


for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation())
}
// SWIPER
const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode: true,

    slidesPerView: 4,
    spaceBetween: 42,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {

            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {

            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});

// ! Tabs

const tabBtns = document.querySelectorAll('[data-tab]')
const tabsProducts = document.querySelectorAll('[data-tab-value]')


for (let btn of tabBtns) {

    btn.addEventListener('click', function () {


        // Turn Off active btn
        for (let btn of tabBtns) {
            btn.classList.remove('tab_controls_btn__active')
        }

        // Turn On active btn
        this.classList.add('tab_controls_btn__active')


        for (let product of tabsProducts) {

            if (this.dataset.tab === 'all') {
                product.classList.remove('none')
            } else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none')

                } else {

                    product.classList.add('none')
                }
            }
        }

        swiper.update()

    })
}

// ! Mobile Nav 

const mobileOpenBtn = document.querySelector('#open_mobile_nav')
const mobileCloseBtn = document.querySelector('#close_mobile_nav')
const mobileNav = document.querySelector('#mobile_nav')

// ! mobile_nav_wrapper__open

mobileOpenBtn.onclick = function () {
    mobileNav.classList.add('mobile_nav_wrapper__open')
}
mobileCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile_nav_wrapper__open')
}