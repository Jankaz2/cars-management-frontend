export default class HamburgerNavigation {
    static #showHamburgerNav() {
        const hamburgerNav = document.querySelector('.hamburger-nav');
        const hamburgerToggle = document.querySelector('.fa-bars');
        hamburgerToggle.addEventListener('click', () => {
            if (hamburgerNav.style.display === 'block') {
                hamburgerNav.style.display = 'none';
            } else {
                hamburgerNav.style.display = 'block';
            }
        });
    }

    static #showOptionsHamburgerNav() {
        const mainOptionsBtn = document.querySelector('.options-hamburger-btn');
        const allOptionsBtns = document.querySelector('.options-hamburger');
        mainOptionsBtn.addEventListener('click', () => {
            if (allOptionsBtns.style.display === 'block') {
                allOptionsBtns.style.display = 'none';
                allOptionsBtns.style.transition = 'display .2s';
            } else {
                allOptionsBtns.style.display = 'block';
            }
        });
    }

    static #turnOffHamburgerNav() {
        const hamburgerNav = document.querySelector('.hamburger-nav');
        document.addEventListener('mouseup', function (e) {
            if (!hamburgerNav.contains(e.target)) {
                hamburgerNav.style.display = 'none';
            }
        })
    }

    static showHamburgerNavOptionsTurnOff() {
        this.#showHamburgerNav()
        this.#showOptionsHamburgerNav()
        this.#turnOffHamburgerNav()
    }
}