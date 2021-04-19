import Animations from "../navigation/animations/webStarterAnimations";

export default class CreateStats {
    static #createStats(mileageStats, priceStats) {
        const minPrice = document.getElementById('minimum-price');
        const maxPrice = document.getElementById('maximum-price');
        const avgPrice = document.getElementById('average-price');
        const minMileage = document.getElementById('minimum-mileage');
        const maxMileage = document.getElementById('maximum-mileage');
        const avgMileage = document.getElementById('average-mileage');
        minPrice.innerHTML = `${Animations.animateValue(minPrice, 0, priceStats.min, 2000)}`;
        maxPrice.innerHTML = `${Animations.animateValue(maxPrice, 0, priceStats.max, 2000)}`;
        avgPrice.innerHTML = `${Animations.animateValue(avgPrice, 0, priceStats.avg, 2000)}`;
        minMileage.innerHTML = `${Animations.animateValue(minMileage, 0, mileageStats.min, 2000)}`;
        maxMileage.innerHTML = `${Animations.animateValue(maxMileage, 0, mileageStats.max, 2000)}`;
        avgMileage.innerHTML = `${Animations.animateValue(avgMileage, 0, mileageStats.avg, 2000)}`;
    }

    static showStats() {
        const statsBtn = document.querySelector('.show-stats-btn');
        fetch('http://localhost:8080/cars/statistics')
            .then(response => response.json())
            .then(stats => {
                this.#createStats(stats.mileageStatistics, stats.priceStatistics);
            })
            .catch(err => {
                console.log(err);
            })
    }
}