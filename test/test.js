const assert = require('assert');

// Sample test
describe('Test', () => {
    context('Function to be tested', () => {

        // Before
        before(() => {
            console.log('==== Runs before all tests begin');
        });

        // After
        after(() => {
            console.log('==== Runs when all tests end');
        });

        // Before Each
        beforeEach(() => {
            console.log('==== Runs before each test begins');
        });

        // After Each
        afterEach(() => {
            console.log('==== Runs after each test ends');
        });

        // Sample Test 1
        it('what it should do', () => {
            assert.equal(1,1);
        });

        // Sample Test 2
        it('names should be the same', () => {
            assert.deepEqual({'name': 'joe'}, {'name': 'joe'});
        });

        // Pending Test
        it('pending test');

        // Context
        context('some function', () => {
            it('should do something');
        });
    });
});