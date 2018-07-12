let PaymentPackage = require('../payment-package');
let expect = require('chai').expect;

describe('PaymentPackage', function () {
    let payment;
    beforeEach(function () {
        payment = new PaymentPackage('HR Services', 1500);
    });

    it('Instantiation', function () {
        payment = new PaymentPackage('HR Services', 0);
        expect(payment.value).to.equal(0);
        expect(() => { payment = new PaymentPackage(5, 1500) }).to.throw(Error);
        expect(() => { payment = new PaymentPackage('Hi', 'Hi') }).to.throw(Error);
        expect(() => { payment = new PaymentPackage(5, 'Hi') }).to.throw(Error);
        expect(() => { payment = new PaymentPackage('Hi') }).to.throw(Error);
        expect(() => { payment = new PaymentPackage('', 1200) }).to.throw(Error);
    });

    describe('Accessors', function () {
        it('Active', function () {
            expect(payment.name).to.equal('HR Services');
            payment.name = 'New Name';
            expect(payment.name).to.equal('New Name');
            expect(() => { payment.name = ''}).to.throw(Error);
            expect(() => { payment.name = 12}).to.throw(Error);
        });

        it('Value', function () {
            expect(payment.value).to.equal(1500);
            payment.value = 1600;
            expect(payment.value).to.equal(1600);
            expect(() => { payment.value = 'hi'}).to.throw(Error);
            expect(() => { payment.value = -1500}).to.throw(Error);
        });

        it('VAT', function () {
            expect(payment.VAT).to.equal(20);
            payment.VAT = 30;
            expect(payment.VAT).to.equal(30);
            expect(() => { payment.VAT = 'hi'}).to.throw(Error);
            expect(() => { payment.VAT = -20}).to.throw(Error);
            expect(() => { payment.VAT = null}).to.throw(Error);
        });

        it('Active', function () {
            expect(payment.active).to.equal(true);
            payment.active = false;
            expect(payment.active).to.equal(false);
            expect(() => { payment.active = 'hi'}).to.throw(Error);
            expect(() => { payment.active = null}).to.throw(Error);
        });

    });

    describe('toString', function () {
        it('Active', function () {
            expect(payment.toString()).to.equal(`Package: ${payment.name}\n- Value (excl. VAT): ${payment.value}\n- Value (VAT ${payment.VAT}%): ${payment.value * (1 + payment.VAT / 100)}`);
        });

        it('Inactive', function () {
            payment.active = false;
            expect(payment.toString()).to.equal(`Package: ${payment.name} (inactive)\n- Value (excl. VAT): ${payment.value}\n- Value (VAT ${payment.VAT}%): ${payment.value * (1 + payment.VAT / 100)}`);
        });
    });
});