let StringBuilder = require('../string-builder');
let expect = require('chai').expect;

describe('StringBuilder tests', function () {
    let builder;
    beforeEach(function () {
        builder = new StringBuilder('test');
    });

    it('Should initialize all methods', function () {
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.equal(true);
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true);
    });

    it('Should return the same input', function () {
        expect(builder.toString()).to.be.equal('test');
    });

    it('Should return the same input', function () {
        builder = new StringBuilder();
        expect(builder.toString()).to.be.equal('');
    });

    it('Should throw Error', function () {
        expect(() => { builder = new StringBuilder(5) }).to.throw(TypeError);
    });

    it('append', function () {
        builder.append(' hi');
        expect(builder.toString()).to.be.equal('test hi');
        expect(builder._stringArray.length).to.be.equal(7);
        expect(() => { builder.append(5)} ).to.throw(TypeError);
    });

    it('prepend', function () {
        builder.prepend('hi ');
        expect(builder._stringArray.length).to.be.equal(7);
        expect(builder.toString()).to.be.equal('hi test');
        expect(() => { builder.prepend(5)} ).to.throw(TypeError);
    });

    it('insertAt', function () {
        builder.insertAt(' hi ', 4);
        expect(builder._stringArray.length).to.be.equal(8);
        expect(builder.toString()).to.be.equal('test hi ');
    });

    it('remove', function () {
        builder.remove(1, 2);
        expect(builder._stringArray.length).to.be.equal(2);
        expect(builder.toString()).to.be.equal('tt');
    });

    it('toString', function () {
        expect(builder.toString()).to.be.equal('test');
    });
});