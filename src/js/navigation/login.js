export default class LoginBox {
    static showLogin() {
        const loginBtn = document.querySelector('.login-btn')
        const loginBox = document.querySelector('.login-box');
        loginBtn.addEventListener('click', (e) => {
            if (loginBox.style.display === 'block') {
                loginBox.style.display = 'none'
            } else {
                loginBox.style.display = 'block'
            }
            e.preventDefault()
        });

        const loginHamburgerBtn = document.querySelector('.log-in-hamburger-btn')
        const loginHamburgerBox = document.querySelector('.log-in-hamburger-box')
        loginHamburgerBtn.addEventListener('click', (e) => {
            if (loginHamburgerBox.style.display === 'block') {
                loginHamburgerBox.style.display = 'none'
            } else {
                loginHamburgerBox.style.display = 'block'
            }
            e.preventDefault()
        })
    }

    static showRegistry() {
        const registryBtn = document.querySelector('.registry-btn');
        const registryBox = document.querySelector('.registry-box');

        registryBtn.addEventListener('click', (e) => {
            if (registryBox.style.display === 'block') {
                registryBox.style.display = 'none'
            } else {
                registryBox.style.display = 'block'
            }
            e.preventDefault()
        });
    }
}