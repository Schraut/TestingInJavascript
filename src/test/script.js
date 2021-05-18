const webDatabase = [
  'google.com',
  'cats.com',
  'flowers.com',
  'catpictures.com',
  'myfavoritecats.com',
];

const googleSearch = (searchInput) => {
  const matches = webDatabase.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('cat'));
