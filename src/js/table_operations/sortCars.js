import {showDataForCars} from "../data/showData";

export default class TableAnimations {
    static sortCars() {
        window.onload = function () {
            const sortBtn = document.querySelector('.select-box');

            sortBtn.addEventListener('click', () => {
                if (sortBtn.value === 'COMPONENTS') {
                    showDataForCars('/components/sort');
                }
                if (sortBtn.value === 'MODEL') {
                    showDataForCars('/sort/MODEL/true');
                }
                if (sortBtn.value === 'PRICE') {
                    showDataForCars('/sort/PRICE/true');
                }
                if (sortBtn.value === 'MILEAGE') {
                    showDataForCars('/sort/MILEAGE/true');
                }
                if (sortBtn.value === 'COLOR') {
                    showDataForCars('/sort/COLOR/true');
                }
            });
        }
    }
}