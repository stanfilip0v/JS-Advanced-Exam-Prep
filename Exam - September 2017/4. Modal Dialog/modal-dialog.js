class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.inputs = [];
    }

    addInput(label, name, type) {
        this.inputs.push({ label, name, type });
    }

    render() {
        let callback = this.callback;

        let element = $('<div>').addClass('overlay');
        let innerElement = $('<div>').addClass('dialog')
            .append($('<p>').text(`${this.message}`));

        for (let input of this.inputs) {
            let label = $('<label>').text(`${input.label}`);
            innerElement.append(label);
            let field = $(`<input name="${input.name}" type="${input.type}">`);
            innerElement.append(field);
        }

        let okButton = $('<button>').html('OK').on('click', function (ev) {
            let obj = {};
            let inputs = $('.dialog input').toArray();
            inputs.forEach(i => obj[$(i).attr('name')] = $(i).val());
            callback(obj);

            $(ev.target).parent().parent().remove();
        });
        let cancelButton = $('<button>').html('Cancel').on('click', function (ev) {
            $(ev.target).parent().parent().remove();
        });

        innerElement.append(okButton);
        innerElement.append(cancelButton);
        element.append(innerElement);

        $('body').append(element);
    }
}

//
//
// `<div class="overlay">
//   <div class="dialog">
//     <p>Dialog, containing message text and input field.</p>
//     <label>Name</label>
//     <input name="name" type="text">
//     <button>OK</button>
//     <button>Cancel</button>
//   </div>
// </div>			`