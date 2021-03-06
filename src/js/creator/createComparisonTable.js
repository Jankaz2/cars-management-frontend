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
        const headers = ['ID', 'Model', 'Price'];
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

    static #appendItemModel = (idx, model, car) => {
        const colorTable = document.querySelector('.comparison-table');
        const colorTableBodyRow = document.createElement('tr');
        colorTableBodyRow.className = 'comparison-table-body-row';
        const cIdx = document.createElement('td');
        cIdx.innerText = idx;
        const cModel = document.createElement('td');
        cModel.innerText = model;
        const cCars = document.createElement('td');
        cCars.innerText = car.price;
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

    static #models() {
        fetch('http://localhost:8080/cars/model/most-expensive')
            .then(response => response.json())
            .then(data => {
                this.#createModelTable();
                Object.entries(data).forEach(([model, cars], idx) => {
                    this.#appendItemModel(idx + 1, model, cars[0]);
                })
            })
            .catch(err => {
                throw new Error(err);
            })
    }

    static #modelsWithMaximumPrice() {
        const btn = document.querySelector('.model-most-expensive-cars');
        btn.addEventListener('click', (e) => {
            this.#models();
            e.preventDefault();
        });
    }

    static allComparisonFunctions() {
        this.grouped()
        this.#showGroupedByColor()
        this.#modelsWithMaximumPrice()
    }
}