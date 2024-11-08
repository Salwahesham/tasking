
// إضافة المنتج إلى الجدول أو تحديث الكمية إذا كان موجود بالفعل
function addToTable(productName, productPrice, productImage) {
    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    let rowFound = false;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells[1].textContent === productName) {
            // تحديث الكمية والإجمالي إذا كان المنتج موجود بالفعل
            let quantity = parseInt(cells[3].textContent);
            quantity += 1;
            cells[3].textContent = quantity;
            cells[4].textContent = (quantity * productPrice).toFixed(2);
            rowFound = true;
            break;
        }
    }

    if (!rowFound) {
        // إذا لم يتم العثور على المنتج، يتم إضافة صف جديد
        const newRow = table.insertRow();

        const imgCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const priceCell = newRow.insertCell(2);
        const quantityCell = newRow.insertCell(3);
        const totalCell = newRow.insertCell(4);

        imgCell.innerHTML = `<img src="${productImage}" alt="Product Image" width="50">`;
        nameCell.textContent = productName;
        priceCell.textContent = productPrice.toFixed(2);
        quantityCell.textContent = 1;
        totalCell.textContent = productPrice.toFixed(2);
    }
}
