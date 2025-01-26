const fs = require('./pelis.js');

function main() {
    const peliculas = fs.getAll();
    console.log(peliculas);
}

main();