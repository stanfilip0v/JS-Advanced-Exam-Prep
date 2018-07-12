class PublicTransportTable {
    constructor(city) {
        this.city = city;
        $('caption').html(`${this.city}'s Public Transport`);
        this.search = $('.search-btn');
        this.clear = $('.clear-btn');
        let searchedType = $('input [name=type]');
        let searchedName = $('input [name=name]');

        this.search.on('click', function () {
            let searchedType = $('[name=type]').val();
            let searchedName = $('[name=name]').val();

            if (searchedType !== '' && searchedName === '') {
                let rows = $('.vehicles-info tr.hide-info').toArray();

                for (let row of rows) {
                    if (!row.children[0].innerHTML.includes(searchedType)) {
                        if($(row).next().attr('class') === 'more-info') {
                            row.children[2].children[0].innerHTML = 'More Info';
                            $(row).next().remove();
                        }
                        $(row).css('display', 'none');
                    }
                    else {
                        $(row).removeAttr('style');
                    }
                }

                $('[name=type]').val('');
                $('[name=name]').val('');
            }

            if (searchedType === '' && searchedName !== '') {
                let rows = $('.vehicles-info tr.hide-info').toArray();

                for (let row of rows) {
                    if (!row.children[1].innerHTML.includes(searchedName)) {
                        if($(row).next().attr('class') === 'more-info') {
                            row.children[2].children[0].innerHTML = 'More Info';
                            $(row).next().remove();
                        }
                        $(row).css('display', 'none');
                    }
                    else {
                        $(row).removeAttr('style');
                    }
                }

                $('[name=type]').val('');
                $('[name=name]').val('');
            }

            if (searchedType !== '' && searchedName !== '') {
                let rows = $('.vehicles-info tr.hide-info').toArray();

                for (let row of rows) {
                    if (!row.children[1].innerHTML.includes(searchedName) || !row.children[0].innerHTML.includes(searchedType)) {
                        if($(row).next().attr('class') === 'more-info') {
                            row.children[2].children[0].innerHTML = 'More Info';
                            $(row).next().remove();
                        }
                        $(row).css('display', 'none');
                    }
                    else {
                        $(row).removeAttr('style');
                    }
                }

                $('[name=type]').val('');
                $('[name=name]').val('');
            }
        });

        this.clear.on('click', function () {
            $('[name=type]').val('');
            $('[name=name]').val('');

            let rows = $('.vehicles-info tr.hide-info').toArray();

            for (let row of rows) {
                $(row).removeAttr('style');
            }
        });
    }

    addVehicle(obj) {
        let type = obj.type;
        let name = obj.name;
        let route = obj.route;
        let price = obj.price;
        let driver = obj.driver;
        let vehicles = $('.vehicles-info');

        let vehicle = $('<tr>').addClass('hide-info')
            .append($('<td>').text(type))
            .append($('<td>').text(name))
            .append($('<td>')
                .append($('<button>').html('More Info').on('click', function (ev) {
                    if ($(ev.target).html() === 'More Info') {
                        $(ev.target).html('Less Info');

                        let hiddenInfo = $('<tr>').addClass('more-info')
                            .append($('<td>').attr('colspan', '3')
                                .append($('<table>')
                                    .append($('<tr>')
                                        .append($('<td>').text(`Route: ${route}`))
                                        .append($('<td>').text(`Price: ${price}`))
                                        .append($('<td>').text(`Driver: ${driver}`)))));

                        hiddenInfo.insertAfter($(ev.target).parent().parent());
                    }
                    else {
                        $(ev.target).html('More Info');
                        $(ev.target).parent().parent().next().remove();
                    }
                })));

        vehicles.append(vehicle);
    }
}


