    
    

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            slidesPerGroup: 0,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                // when window width is <= 500px
                300: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                400: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                960: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1300: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },

            }

        });

        