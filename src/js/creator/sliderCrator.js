export default function slider() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider-btn-left');
    const btnRight = document.querySelector('.slider-btn-right');
    const dots = document.querySelector('.dots');

    let currentSlide = 0;
    const maxSlide = slides.length;

    const createDots = function () {
        slides.forEach(function (_, i) {
            dots.insertAdjacentHTML(
                'beforeend',
                `<button class="dots-dot" data-slide="${i}"></button>`
            );
        });
    };
    createDots();

    const activateDot = function (slide) {
        document.querySelectorAll('.dots-dot').forEach(dot =>
            dot.classList.remove('dots-dot-active'));

        document.querySelector(`.dots-dot[data-slide="${slide}"]`)
            .classList.add(`dots-dot-active`);
    }
    activateDot(0);
    const goToSlide = function (slide) {
        slides.forEach((s, i) =>
            s.style.transform = `translateX(${100 * (i - slide)}%)`)
    }
    goToSlide(0);

    const nextSlide = function () {
        if (currentSlide === maxSlide - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        goToSlide(currentSlide);
        activateDot(currentSlide);
    }

    const prevSlide = function () {
        if (currentSlide === 0) {
            currentSlide = maxSlide - 1;
        } else {
            currentSlide--;
        }
        goToSlide(currentSlide);
        activateDot(currentSlide);
    }

    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        }
        e.key === 'ArrowRight' && nextSlide();
    });

    dots.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots-dot')) {
            const {slide} = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    })
}