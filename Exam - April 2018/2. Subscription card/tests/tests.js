let SubscriptionCard = require('../subscription-card');
let expect = require('chai').expect;

describe('SubscriptionCard', function () {

    let card;
    beforeEach(function () {
        card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
    });

    it('Instantiation', function () {
        expect(card._firstName).to.equal('Pesho');
        expect(typeof card._firstName).to.be.equal('string');
        expect(card._lastName).to.equal('Petrov');
        expect(typeof card._lastName).to.be.equal('string');
        expect(card._SSN).to.equal('00000000');
        expect(typeof card._SSN).to.be.equal('string');
        expect(Array.isArray(card._subscriptions)).to.equal(true);
        expect(card._subscriptions.length).to.equal(0);
        expect(card._blocked).to.equal(false);
        expect(typeof card._blocked).to.equal('boolean');
    });

    it('Accessors', function () {
        expect(card.firstName).to.equal('Pesho');
        expect(card.lastName).to.equal('Petrov');
        expect(card.SSN).to.equal('00000000');
        expect(card.isBlocked).to.equal(false);
    });

    it('Add subscription', function () {
        card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        expect(card._subscriptions.length).to.equal(2);
    });

    it('Block and Unblock', function () {
        card.block();
        expect(card.isBlocked).to.equal(true);
        card.unblock();
        expect(card.isBlocked).to.equal(false);
    });

    it('Is Valid', function () {
        card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
        card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        expect(card.isValid('120', new Date('2018-04-22'))).to.equal(true);
        expect(card.isValid('30', new Date('2018-06-24'))).to.equal(true);
        expect(card.isValid('30', new Date('2018-05-21'))).to.equal(false);
        expect(card.isValid('120', new Date('2018-04-20'))).to.equal(false);
        expect(card.isValid('120', new Date('2018-05-22'))).to.equal(false);
        expect(card.isValid('120', new Date('2018-04-29'))).to.equal(true);
        expect(card.isValid('20', new Date('2018-05-29'))).to.equal(true);
        card.block();
        expect(card.isValid('120', new Date('2018-04-29'))).to.equal(false);
        expect(card.isValid('20', new Date('2018-05-29'))).to.equal(false);
    });

});