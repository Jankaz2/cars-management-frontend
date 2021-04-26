export default class LoginBox {
    static #showLogin() {
        const loginBtn = document.querySelector('.login-btn')
        const loginBox = document.querySelector('.login-box');
        const registryBox = document.querySelector('.registry-box');
        const registryHamburgerBox = document.querySelector('.sign-up-hamburger-box')

        loginBtn.addEventListener('click', (e) => {
            if (loginBox.style.display === 'block') {
                loginBox.style.display = 'none'
                registryBox.style.display = 'none'
            } else {
                loginBox.style.display = 'block'
                registryBox.style.display = 'none'
            }
            e.preventDefault()
        });

        const loginHamburgerBtn = document.querySelector('.log-in-hamburger-btn')
        const loginHamburgerBox = document.querySelector('.log-in-hamburger-box')
        loginHamburgerBtn.addEventListener('click', (e) => {
            if (loginHamburgerBox.style.display === 'block') {
                loginHamburgerBox.style.display = 'none'
                registryHamburgerBox.style.display = 'none'
            } else {
                loginHamburgerBox.style.display = 'block'
                registryHamburgerBox.style.display = 'none'
            }
            e.preventDefault()
        })
    }

    static #showRegistry() {
        const registryBtn = document.querySelector('.registry-btn');
        const registryBox = document.querySelector('.registry-box');
        const loginBox = document.querySelector('.login-box');
        const loginHamburgerBox = document.querySelector('.log-in-hamburger-box')

        registryBtn.addEventListener('click', (e) => {
            if (registryBox.style.display === 'block') {
                registryBox.style.display = 'none'
            } else {
                registryBox.style.display = 'block'
                loginBox.style.display = 'none'
                loginHamburgerBox.style.display = 'none'
            }
            e.preventDefault()
        });

        const registryHamburgerBtn = document.querySelector('.sign-in-hamburger-btn')
        const registryHamburgerBox = document.querySelector('.sign-up-hamburger-box')
        registryHamburgerBtn.addEventListener('click', (e) => {
            if (registryHamburgerBox.style.display === 'block') {
                registryHamburgerBox.style.display = 'none'
            } else {
                registryHamburgerBox.style.display = 'block'
                loginHamburgerBox.style.display = 'none'
            }
            e.preventDefault()
        })
    }

    static showLoginAndRegistry() {
        LoginBox.#showRegistry()
        LoginBox.#showLogin()
    }
}