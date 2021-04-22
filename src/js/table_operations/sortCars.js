import {showDataForCars} from "../data/showData";

export default class TableAnimations {
    static sortCars() {
        const selectBox = document.querySelector('.select-box')
        const sortBtn = document.getElementById('sort-btn')
        const radioOrderBtnDesc = document.getElementById('desc')
        const radioOrderBtnAsc = document.getElementById('asc')
        let sortOrderValue = false

        radioOrderBtnAsc.addEventListener('click', (e) => {
            if (radioOrderBtnDesc.checked === true) {
                radioOrderBtnAsc.checked = true
                radioOrderBtnDesc.checked = false
                sortOrderValue = false
            }
        })
        radioOrderBtnDesc.addEventListener('click', (e) => {
            if (radioOrderBtnAsc.checked === true) {
                radioOrderBtnDesc.checked = true
                radioOrderBtnAsc.checked = false
                sortOrderValue = true
            }
        })
        sortBtn.addEventListener('click', (e) => {
            if (selectBox.value === 'components') {
                showDataForCars('/components/sort')
            } else {
                showDataForCars(`/sort/${selectBox.value.toUpperCase()}/${sortOrderValue}`)
            }
            e.preventDefault()
        });
    }
}