const chai = require('chai');
const expect = chai.expect;

describe('chai test', () => {
    it('should compare some values', () => {
        expect(1).to.equal(1);
    });

    it('other tests', () => {
        expect({name: 'john smith'}).to.deep.equal({name: 'john smith'});
        expect({name: 'john smith'}).to.have.property('name').to.equal('john smith');
        expect(1 < 3).to.be.true;
        expect({}).to.be.a('object');
        expect('name').to.be.a('string');
        expect(60).to.be.a('number');
        expect('abc').to.be.a('string').with.length(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect('a').to.exist;
    })
});