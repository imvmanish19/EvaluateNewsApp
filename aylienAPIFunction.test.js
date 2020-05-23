const outputTest = require('./src/client/js/ayleinAPIFunction')

test('Testing the main API function', () => {
    expect(outputTest()).toBe('success');
});


