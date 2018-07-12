function addProduct() {
    let productInput = $('#add-product label input[type=text]');
    let priceInput = $('#add-product label input[type=number]');
    let productList = $('#product-list');
    let total = $('#bill tfoot tr td');

    if(priceInput.val() !== '' && productInput.val() !== '') {
        let newProduct = $('<tr>')
            .append($(`<td>${productInput.val()}</td>`))
            .append($(`<td>${priceInput.val()}</td>`));

        total[1].innerHTML = (Number(total[1].innerHTML) + Number(priceInput.val()));

        productList.append(newProduct);

        productInput.val('');
        priceInput.val('');
    }
}