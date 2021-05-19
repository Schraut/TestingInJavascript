// function to be tested
// it takes in a search input and the database to be tested
const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
