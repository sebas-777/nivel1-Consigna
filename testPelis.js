const fs = require('./pelis.js');

const allMovies = fs.getAll();


const sortedMovies = fs.getBySort('title');

const searchResults = fs.getBySearch(allMovies, 'Forrest Gump');


function testGetAllPelis() { 
    result = allMovies.length > 0;
    console.log("Se encontraron pelis: ", result);
    console.log("Las pelis son : ", allMovies);
    return result;
}

function testGetBySort() { 
    result = sortedMovies.length > 0;
    console.log("Se encontraron pelis: ", result);
    console.log(`Las pelis ordenadas son : ${JSON.stringify(sortedMovies, null, 2)}`);
    return result;
}


function testSearch() {
    result  = searchResults.length > 0;
    console.log("el resultado de la busqueda es: ", result);
    console.log(`El resultado de la busqueda es: ${JSON.stringify(searchResults, null, 2)}`);
    return result;
}

testGetAllPelis();
testGetBySort();
testSearch();