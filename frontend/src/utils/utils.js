export function convertToBlob(obj) {
    const json = JSON.stringify(obj)
    return new Blob([json], {
        type: 'application/json'
    })
}

export function generateImageFromFileName(fileName = '') {
    if (fileName.startsWith('http') || fileName.startsWith('https')) {
        return fileName
    }
    return `http://localhost:8080/api/v1/fileUpload/files/${fileName}`
}

export function formatCurrency(currency, prefix = 'VNĐ') {
    return new Intl.NumberFormat('de-DE').format(Math.round(currency)) + prefix
}

export function getHotelDetailStandard(type) {
    switch (type) {
        case 'standard':
            return 'Phòng Tiêu Chuẩn';
        case 'vip':
            return 'Phòng Vip';
        default:
            return type;
    }
}

export function formatDate(date = new Date()) {
    let datePart = []
    if (typeof date == 'string') {
        datePart = date.split("-")
    } else {
        datePart = date.toISOString().substring(0, 10).split("-");
    }
    console.log(datePart)
    console.log(`${datePart[2]}/${datePart[1]}/${datePart[0]}`)
    return `${datePart[1]}/${datePart[2]}/${datePart[0]}`
}