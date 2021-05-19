const googleSearch = require('./script');
// mock database used for the test
const mockDatabase = [
  'google.com',
  'cats.com',
  'flowerspretty.com',
  'flowers.com',
  'catpictures.com',
  'myfavoritecats.com',
  'uglycats.com',
];
console.log(googleSearch); // prints [Function: googleSearch]

it('this is a google search test', () => {
  googleSearch('testing google search', mockDatabase);
});

it('Searching database test', () => {
  expect(googleSearch('testing', mockDatabase)).toEqual([]);
  expect(googleSearch('flowers', mockDatabase)).toEqual([
    'flowers.com',
    'flowerspretty.com',
  ]);
});
