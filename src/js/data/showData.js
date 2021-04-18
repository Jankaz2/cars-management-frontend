import TableCreator from "../creator/createTable";

export const showDataForCars = (request = '') => {
    const tableCreator = new TableCreator();
    tableCreator.getDataAndCreateTable(request);
}