export default class DarkModeCreator {
    static switchThemeMode() {
        const toggleButton = document.querySelector('.dark-mode-switcher');
        const stickyNav = document.querySelector('.top-nav')
        const tableSearchSection = document.querySelector('.table-search-section');
        const comparisonContainer = document.querySelector('.comparison-container-section');
        const slider = document.querySelector('.slider');
        const sectionContact = document.querySelector('.section-contact');
        const orderLabel = document.querySelectorAll('.order-label')

        toggleButton.addEventListener('click', () => {
            if (toggleButton.textContent === 'DARK') {
                toggleButton.classList.add('light');
                tableSearchSection.classList.add('darkmode');
                stickyNav.classList.add('darkmode');
                comparisonContainer.classList.add('darkmode');
                slider.classList.add('darkmode');
                sectionContact.classList.add('darkmode');
                orderLabel.forEach(label => label.classList.add('darkmode'));
                toggleButton.textContent = 'LIGHT'
            } else {
                toggleButton.classList.remove('light');
                tableSearchSection.classList.remove('darkmode');
                stickyNav.classList.remove('darkmode');
                comparisonContainer.classList.remove('darkmode');
                slider.classList.remove('darkmode');
                sectionContact.classList.remove('darkmode');
                orderLabel.forEach(label => label.classList.remove('darkmode'));
                toggleButton.textContent = 'DARK';
            }
        })
    }
}