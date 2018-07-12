function busRoute() {
    let busStops = $('#bus-stops li');
    let firstStop = $('[name=first-stop]');
    let lastStop = $('[name=last-stop]');
    let selectedStops = $('#selected-bus-stops');

    if (Number(firstStop.val()) && Number(lastStop.val())) {
        if(Number(firstStop.val()) > 0 && Number(firstStop.val()) < busStops.length && Number(lastStop.val()) > Number(firstStop.val()) && Number(lastStop.val()) <= busStops.length) {
            selectedStops.html('');

            for (let i = Number(firstStop.val()) - 1; i < Number(lastStop.val()); i++) {
                let stop = busStops[i].innerHTML;
                console.log(stop);
                selectedStops
                    .append($('<li>').html(stop));
            }
            $('#selected-route span').html(`${firstStop.val()}-${lastStop.val()}`);

            firstStop.val('');
            lastStop.val('');
        }
    }
}