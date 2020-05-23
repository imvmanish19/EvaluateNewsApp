const urlTester = require('./src/client/js/urlValidater');
let articleURL = `https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/1300-people-sign-online-petition-to-disable-whatsapp-on-amitabh-bachchans-phone-heres-why/articleshow/75403604.cms`;

//Testing Valid URL's

test('Testing URL Validater With Domains', () => {
    expect(urlTester('www.example.com')).toBeTruthy();
});

test('Testing URL Validator With Article Links', () => {
    expect(urlTester(articleURL)).toBeTruthy();
});

//Testing Invalid URL's

test('Testing URL Validater With only domain name', () => {
    expect(urlTester('google')).toBeFalsy();
});

test('Testing URL Validator Without com etc', () => {
    expect(urlTester('www.google.')).toBeFalsy();
});


