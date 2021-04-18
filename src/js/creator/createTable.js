export default class TableCreator {
    #createTable(headers) {
        const carsTableDiv = document.querySelector('div.cars-table-box');
        while (carsTableDiv.firstChild) carsTableDiv.removeChild(carsTableDiv.firstChild);
        const table = document.createElement('table');
        table.className = 'cars-table';
        const tableHeader = document.createElement('thead');
        tableHeader.className = 'cars-table-header';
        const tableHeaderRow = document.createElement('tr');
        tableHeaderRow.className = 'cars-table-header-row';
        headers.forEach(header => {
            const carHeader = document.createElement('th');
            carHeader.innerText = header;
            tableHeaderRow.append(carHeader);
        })
        tableHeader.append(tableHeaderRow);
        table.append(tableHeader);
        const tableBody = document.createElement('tbody');
        tableBody.className = 'cars-table-body';
        table.append(tableBody);
        carsTableDiv.append(table);
    }

    #appendCar = (car, index) => {
        const carsTable = document.querySelector('.cars-table');
        const carsTableBodyRow = document.createElement('tr');
        const {model, price, mileage, color, components} = car;

        carsTableBodyRow.className = 'cars-table-body-row';
        const carIndex = document.createElement('td');
        carIndex.innerText = index;
        const carModel = document.createElement('td');
        carModel.innerText = model;
        const carPrice = document.createElement('td');
        carPrice.innerText = price;
        const carMileage = document.createElement('td');
        carMileage.innerText = mileage;
        const carColor = document.createElement('td');
        carColor.innerText = color;
        const carComponents = document.createElement('td');
        carComponents.innerText = components;

        carsTableBodyRow.append(carIndex, carModel, carPrice, carMileage, carColor, carComponents);
        carsTable.append(carsTableBodyRow);
    }

    getDataAndCreateTable(request = '') {
        fetch('http://localhost:8080/cars' + request)
            .then(response => response.json())
            .then(cars => {
                this.#createTable(["ID", "Model", "Price", "Mileage", "Color", "Components"])
                for (const car of cars) {
                    const idx = cars.indexOf(car) + 1;
                    this.#appendCar(car, idx);
                }
            })
    }
}