export default class SmoothScrollToSection {
    static scrollToSection() {
        document.querySelectorAll('.nav-link')
            .forEach(element => {
                element.addEventListener('click', function (e) {
                    e.preventDefault()
                    const id = this.getAttribute('href')
                    const yOffset = -90
                    const y = document
                        .querySelector(id)
                        .getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({top: y, behavior: 'smooth'})
                })
            })
    }
}