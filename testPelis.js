const fs = require("./pelis.js");

const allMovies = fs.getAll();

const sortedMovies = fs.getBySort("title");

const searchResults = fs.getBySearch(allMovies, "Forrest Gump");

const SearchTags = fs.getByTags(allMovies, "action");
console.log("searchTags", SearchTags);

function testGetAllPelis() {
  result = allMovies.length > 0;
  console.log("Se encontraron pelis: ", result);
  console.log("Las pelis son : ", allMovies);
  return result;
}

function testGetBySort() {
  result = sortedMovies.length > 0;
  console.log("Se encontraron pelis: ", result);
  console.log(
    `Las pelis ordenadas son : ${JSON.stringify(sortedMovies, null, 2)}`
  );
  return result;
}

function testSearch() {
  result = searchResults.length > 0;
  console.log("el resultado de la busqueda es: ", result);
  console.log(
    `El resultado de la busqueda es: ${JSON.stringify(searchResults, null, 2)}`
  );
  return result;
}

function testTags() {
  const result = SearchTags.length > 0;
  console.log("el resultado de la busqueda es: ", result);
  console.log(
    `La peliculas encontradas segun el tags son: ${JSON.stringify(
      result,
      null,
      2
    )}`
  );
  return result;
}

testGetAllPelis();
testGetBySort();
testSearch();
testTags();
