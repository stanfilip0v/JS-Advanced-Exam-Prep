class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    render(id) {
        let container = $(`#${id}`);
        let table = `<table>
    <caption>${this.title} Payment Manager</caption>
    <thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
    <tbody class="payments"></tbody>
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>
</table>`;

        container.append(table);

        let inputName = $(`div#${id} table tfoot.input-data tr td [name=name]`);
        let inputCategory = $(`div#${id} table tfoot.input-data tr td [name=category]`);
        let inputPrice = $(`div#${id} table tfoot.input-data tr td [name=price]`);
        let addButton = $(`div#${id} table tfoot.input-data tr td button`);

        addButton.on('click', function () {
            if (inputName.val() !== '' && typeof inputName.val() === "string" && inputCategory.val() !== '' && typeof inputCategory.val() === "string" && inputPrice.val() !== '' && Number(inputPrice.val())) {
                let item = $('<tr>').appendTo($(`div#${id} table tbody.payments`));
                let deleteButton = $(`<button>`).html('Delete');

                item.append($('<td>').html(`${inputName.val()}`));
                item.append($('<td>').html(`${inputCategory.val()}`));
                item.append($('<td>').html(`${Number(inputPrice.val()).toString()}`));
                item.append($('<td>')
                    .append(deleteButton));

                deleteButton.on('click', function () {
                    $(this).closest('tr').remove();
                });
                inputName.val('');
                inputCategory.val('');
                inputPrice.val('');
            }

        });
    }
}