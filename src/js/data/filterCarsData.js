import {showDataForCars} from "./showData";

export default class FilterCars {
    static filterCarsByBtn() {
        const searchCarsBtn = document.querySelector('.submit-button');
        searchCarsBtn.addEventListener('click', (e) => {
            const model = document.getElementById('model-search').value;
            const minMileage = document.getElementById('mileage-from').value;
            const maxMileage = document.getElementById('mileage-to').value;
            const color = document.getElementById('color-search').value;
            const priceMin = document.getElementById('price-from').value;
            const priceMax = document.getElementById('price-to').value;
            const components = document.getElementById('components-search').value;
            if (model.length === 0 && minMileage.length === 0 && maxMileage.length === 0 && color.length === 0 && priceMin.length === 0
                && priceMax.length === 0 && components.length === 0) {
                showDataForCars('');
            }else {
                showDataForCars(`/filter/${model.toUpperCase()}/${priceMin}/${priceMax}/${color.toUpperCase()}/${minMileage}/${maxMileage}/${components.toUpperCase()}`);
            }
            e.preventDefault();
        });
    }
}