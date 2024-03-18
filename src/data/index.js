const path = require('path');
const fs = require('fs');


module.exports = {
    readData: (filenameJson = 'products') => {
        const pathJson = path.join(__dirname, `${filenameJson}.json`)
        const dataJsn = fs.readFileSync(pathJson, 'utf-8')
        const dataJS = JSON.parse(dataJsn)
        return dataJS
    },
    saveData: (data, filenameJson = 'products') => {
        const pathJson = path.join(__dirname, `${filenameJson}.json`)
        const dataStringi = JSON.stringify(data, null, 3)
        fs.writeFileSync(pathJson, dataStringi, 'utf-8')
    }
}