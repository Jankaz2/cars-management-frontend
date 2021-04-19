export default class ComparisonTableFunctions {
    static #createColorTable() {
        const headers = ['ID', 'Color', 'Number of cars with this color'];
        const comparisonContainer = document.querySelector('div.comparison-box');

        while (comparisonContainer.firstChild) comparisonContainer.removeChild(comparisonContainer.firstChild);

        const table = document.createElement('table');
        table.className = 'comparison-table';
        const tableHeader = document.createElement('thead');
        tableHeader.className = 'comparison-table-header';
        const tableHeaderRow = document.createElement('tr');
        tableHeaderRow.className = 'comparison-table-header-row';

        headers.forEach(header => {
            const comparisonHeader = document.createElement('th');
            comparisonHeader.innerText = header;
            tableHeaderRow.append(comparisonHeader);
        })

        tableHeader.append(tableHeaderRow);
        table.append(tableHeader);
        const tableBody = document.createElement('tbody');
        tableBody.className = 'comparison-table-body';
        table.append(tableBody);
        comparisonContainer.append(table);
    }

    static #appendItem = (color, quantity, idx) => {
        const colorTable = document.querySelector('.comparison-table');
        const colorTableBodyRow = document.createElement('tr');
        colorTableBodyRow.className = 'comparison-table-body-row';
        const cIdx = document.createElement('td');
        cIdx.innerText = idx;
        const cColor = document.createElement('td');
        cColor.innerText = color;
        const cQuantity = document.createElement('td');
        cQuantity.innerText = quantity;
        colorTableBodyRow.append(cIdx, cColor, cQuantity);
        colorTable.append(colorTableBodyRow);
    }

    static #createModelTable() {
        const headers = ['ID', 'Model', 'Cars'];
        const comparisonContainer = document.querySelector('div.comparison-box');

        while (comparisonContainer.firstChild) comparisonContainer.removeChild(comparisonContainer.firstChild);

        const table = document.createElement('table');
        table.className = 'comparison-table';
        const tableHeader = document.createElement('thead');
        tableHeader.className = 'comparison-table-header';
        const tableHeaderRow = document.createElement('tr');
        tableHeaderRow.className = 'comparison-table-header-row';

        headers.forEach(header => {
            const comparisonHeader = document.createElement('th');
            comparisonHeader.innerText = header;
            tableHeaderRow.append(comparisonHeader);
        })

        tableHeader.append(tableHeaderRow);
        table.append(tableHeader);
        const tableBody = document.createElement('tbody');
        tableBody.className = 'comparison-table-body';
        table.append(tableBody);
        comparisonContainer.append(table);
    }

    static #appendItemModel = (idx, model, cars) => {
        const colorTable = document.querySelector('.comparison-table');
        const colorTableBodyRow = document.createElement('tr');
        colorTableBodyRow.className = 'comparison-table-body-row';
        const cIdx = document.createElement('td');
        cIdx.innerText = idx;
        const cModel = document.createElement('td');
        cModel.innerText = model;
        const cCars = document.createElement('td');
        cCars.innerText = cars;
        colorTableBodyRow.append(cIdx, cModel, cCars);
        colorTable.append(colorTableBodyRow);
    }

    static grouped() {
        fetch('http://localhost:8080/cars/color/group')
            .then(response => response.json())
            .then(data => {
                this.#createColorTable();
                Object.entries(data).forEach(([color, quantity], idx) => {
                    this.#appendItem(color, quantity, idx + 1);
                })
            })
            .catch(err => {
                throw new Error(err);
            })
    }

    static #showGroupedByColor() {
        const groupedBtn = document.querySelector('.color-grouped');
        groupedBtn.addEventListener('click', (e) => {
            this.grouped();
            e.preventDefault();
        })
    }

    static #showMaximumPriceCar() {
        const btn = document.querySelector('.maximum-price-car');
        btn.addEventListener('click', () => {
            showDataForCars('/price/max')
        })
    }

    static #models() {
        fetch('http://localhost:8080/cars/model/most_expensive')
            .then(response => response.json())
            .then(data => {
                this.#createModelTable();
                Object.entries(data).forEach(([model, cars], idx) => {
                    console.log(cars)
                    this.#appendItemModel(idx + 1, model, cars);
                })
            })
            .catch(err => {
                throw new Error(err);
            })
    }

    static #modelsWithMaximumPrice() {
        const btn = document.querySelector('.model-most-expensive-cars');
        btn.addEventListener('click', (e) => {
            this.models();
            e.preventDefault();
        });
    }

    static allComparisonFunctions() {
        this.grouped()
        this.#showGroupedByColor()
        this.#modelsWithMaximumPrice()
    }
}