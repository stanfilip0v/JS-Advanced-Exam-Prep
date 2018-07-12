class PaymentProcessor {
    constructor(options = undefined) {
        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        };
        if (options !== undefined && options.types !== undefined) {
            this.options.types = options.types;
        }
        if (options !== undefined && options.precision !== undefined) {
            this.options.precision = options.precision;
        }

        this._payments = {};
        this.paymentsCount = 0;
        this.ballance = 0;

    }

    registerPayment(id, name, type, value) {
        if (id === '' || name === '' || !this.options.types.includes(type) || typeof value !== "number" || this._payments.hasOwnProperty(id)) {
            throw new Error('invalid type');
        }

        this._payments[id] = { 'name': name, 'type': type, 'value': value };
        this.paymentsCount++;
        this.ballance += value;
    }

    deletePayment(id) {
        if (!this._payments.hasOwnProperty(id)) {
            throw new Error('ID not found');
        }

        this.ballance -= this._payments[id].value;
        delete this._payments[id];
        this.paymentsCount--;
    }

    get(id) {
        if (!this._payments.hasOwnProperty(id)) {
            throw new Error('ID not found');
        }
        let details = `Details about payment ID: ${id}
- Name: ${this._payments[id].name}
- Type: ${this._payments[id].type}
- Value: ${this._payments[id].value.toFixed(this.options.precision)}`;

        return details;
    }

    setOptions(options) {
        if (options !== undefined && options.types !== undefined) {
            this.options.types = options.types;
        }
        if (options !== undefined && options.precision !== undefined) {
            this.options.precision = options.precision;
        }
    }

    toString() {
        let summary = `Summary:
- Payments: ${this.paymentsCount}
- Balance: ${this.ballance.toFixed(this.options.precision)}`;

        return summary;
    }
}

