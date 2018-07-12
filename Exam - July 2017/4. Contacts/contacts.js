class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        this.element = $('<div>').addClass('title').html(`${this.firstName} ${this.lastName}`);
    }

    get online() {
        return this._online;
    }

    set online(online) {
        if (typeof online !== 'boolean') {
            throw new Error;
        }
        this._online = online;
        if (this.online === true) {
            $(this.element).attr('class', 'title online');
            console.log($(this)[0]);
        }
        else if(this.online === false){
            $(this.element).attr('class', 'title');
        }
    }

    render(id) {
        let button = $('<button>').html('&#8505;').on('click', function (ev) {
            if($(ev.target).parent().next().attr('style')) {
                $(ev.target).parent().next().removeAttr('style');
            }
            else {
                $(ev.target).parent().next().css('display', 'none');
            }
        });

        let info = $('<article>')
            .append(this.element
                .append(button))
            .append($('<div>').addClass('info').css('display', 'none')
                .append($('<span>').html(`&phone; ${this.phone}`))
                .append($('<span>').html(`&#9993; ${this.email}`)));

        $(`#${id}`).append(info);
    }
}

