function move(command) {
    let availableTowns = $('#available-towns');
    let selectedTowns = $('#selected-towns');

    if (command === 'right') {
        let townToMove = $('#available-towns option:selected');
        selectedTowns.append(townToMove);
    }
    if (command === 'left') {
        let townToMove = $('#selected-towns option:selected');
        availableTowns.append(townToMove);
    }
    if (command === 'print') {
        let townsToPrint = $('#selected-towns option').toArray();
        for (let i = 0; i < townsToPrint.length; i++) {
            townsToPrint[i] = $(townsToPrint[i]).val();
        }

        $('#output').text(townsToPrint.join('; '));
    }
}