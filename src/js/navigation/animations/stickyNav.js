export default class StickyNav {
    static #stickyNav() {
        const mainTextBox = document.querySelector('.starter-web');
        const navigation = document.querySelector('.top-nav');

        const getOffset = (element) => {
            const rect = element.getBoundingClientRect();
            return {
                left: rect.left + window.scrollX,
                top: rect.top + window.scrollY
            };
        }

        window.addEventListener('scroll', function () {
            navigation.classList.toggle('sticky', window.scrollY > 0);
            if (getOffset(navigation).top >= getOffset(mainTextBox).top) {
                if (mainTextBox.classList.contains('appear')) {
                    mainTextBox.classList.remove('appear');
                }
                mainTextBox.classList.add('hidden');
            } else if ((mainTextBox.classList.contains('hidden') &&
                getOffset(navigation).top <= getOffset(mainTextBox).top)) {
                mainTextBox.classList.remove('hidden');
                mainTextBox.classList.add('appear')
            }
        })
    }

    static useNavigationStickyAndHamburger() {
        this.#stickyNav()
    }
}