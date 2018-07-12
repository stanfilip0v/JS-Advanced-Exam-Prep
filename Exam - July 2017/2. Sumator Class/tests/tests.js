let Sumator = require('../sumator-class');
let expect = require('chai').expect;

describe('Sumator',function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    it('Instantiation', function () {
        expect(Array.isArray(sumator.data)).to.equal(true);
        expect(sumator.data.length).to.equal(0);
    });

    it('add', function () {
        sumator.add(1);
        sumator.add('two');
        sumator.add(true);
        expect(sumator.data.length).to.equal(3);
        expect(sumator.data[0]).to.equal(1);
        expect(sumator.data[1]).to.equal('two');
    });

    describe('sumNums', function () {
        it('more than 0 numbers', function () {
            sumator.add(1);
            sumator.add('two');
            sumator.add(true);
            sumator.add(15);
            sumator.add(17);
            expect(sumator.data.length).to.equal(5, "Element wasn't added");
            expect(sumator.sumNums()).to.equal(33);
        });

        it('no numbers', function () {
            sumator.add('two');
            sumator.add(true);
            expect(sumator.sumNums()).to.equal(0);
        });

        it('one number', function () {
            sumator.add('two');
            sumator.add(true);
            sumator.add(5);
            expect(sumator.sumNums()).to.equal(5);
        });
    });

    describe('Filter', function () {
        it('Even numbers', function () {
            sumator.add(1);
            sumator.add(2);
            sumator.add("three");
            sumator.add(4);
            sumator.add(8);
            sumator.add(5);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.toString()).to.equal('1, three, 5');
        });

        it('Even numbers', function () {
            sumator.add(1);
            sumator.add("five");
            sumator.add(2);
            sumator.add("three");
            sumator.add("six");
            sumator.add(4);
            sumator.add(8);
            sumator.add(5.2);
            sumator.removeByFilter(x => x % 2 !== 0);
            expect(sumator.toString()).to.equal('2, 4, 8');
            expect(() => sumator.removeByFilter(undefined)).to.throw();
        });

        it('strings', function () {
            sumator.add(1);
            sumator.add("five");
            sumator.add(2);
            sumator.add("three");
            sumator.add(4);
            sumator.add(8);
            sumator.add(5);
            sumator.removeByFilter(x => typeof x !== 'string');
            expect(sumator.toString()).to.equal('five, three');
        });
    });

    describe('toString', function () {
        it('empty', function () {
            expect(sumator.toString()).to.equal('(empty)')
        });

        it('full', function () {
            sumator.add(1);
            sumator.add("five");
            sumator.add(2);
            sumator.add("three");
            sumator.add(4);
            sumator.add(8.9);
            sumator.add(5);
            expect(sumator.toString()).to.equal('1, five, 2, three, 4, 8.9, 5');
        });
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('sumNums')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('removeByFilter')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(sumator).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });
});