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
            const componentBox1Value = document.getElementById('components-search-1').value
            const componentBox2Value = document.getElementById('components-search-2').value

            if (model.length === 0 && minMileage.length === 0 && maxMileage.length === 0 && color.length === 0 && priceMin.length === 0
                && priceMax.length === 0) {
                showDataForCars('');
            } else {
                showDataForCars(`/filter/${model.length > 0 ? model.toUpperCase() : 'default-model'}/${priceMin.length > 0 ? priceMin : '0'}/${priceMax.length > 0 ? priceMax : '100000000'}/${color.length > 0 ? color.toUpperCase() : 'default-color'}/${minMileage.length > 0 ? minMileage : '0'}/${maxMileage.length > 0 ? maxMileage : '100000000'}/${componentBox1Value !== 'component' ? componentBox1Value.toUpperCase() : componentBox1Value},${componentBox2Value !== 'component2'? componentBox2Value.toUpperCase() : componentBox2Value}`);
            }
            e.preventDefault();
        });
    }
}