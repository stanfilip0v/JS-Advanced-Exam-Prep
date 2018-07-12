function sort(colIndex, descending) {
    let rows = $('tbody tr');

    if (colIndex === 0 && !descending) {
        rows = rows.sort(function (a, b) {
            let productNameA = a.children[0].innerHTML;
            let productNameB = b.children[0].innerHTML;

            if (productNameA > productNameB) {
                return 1
            }
            if (productNameA < productNameB) {
                return -1
            }
        });

        $('#products tbody').html(rows);
    }
    if (colIndex === 0 && descending) {
        rows = rows.sort(function (a, b) {
            let productNameA = a.children[0].innerHTML;
            let productNameB = b.children[0].innerHTML;

            if (productNameA < productNameB) {
                return 1
            }
            if (productNameA > productNameB) {
                return -1
            }
        });

        $('#products tbody').html(rows);
    }
    if (colIndex === 1 && descending) {
        rows = rows.sort(function (a, b) {
            let productPriceA = Number(a.children[1].innerHTML);
            let productPriceB = Number(b.children[1].innerHTML);

            if (productPriceA < productPriceB) {
                return 1
            }
            if (productPriceA > productPriceB) {
                return -1
            }
        });

        $('#products tbody').html(rows);
    }
    if (colIndex === 1 && !descending) {
        rows = rows.sort(function (a, b) {
            let productPriceA = Number(a.children[1].innerHTML);
            let productPriceB = Number(b.children[1].innerHTML);

            if (productPriceA > productPriceB) {
                return 1
            }
            if (productPriceA < productPriceB) {
                return -1
            }
        });

        $('#products tbody').html(rows);
    }
}