const fs = require('./pelis.js');

function main() {
    
    try {   
        
        //leer elarchivo de pelis.json
        const allMovies = fs.getAll();
        
        // Acceder a los argumentos por linea de comandos 
        const args = process.argv.slice(2);

        //buscar el argumento --sort
        const  sortIndex = args.indexOf('--sort');
   

        //buscar el argumento --search
        const  searchIndex = args.indexOf('--search');
            
        if(sortIndex !== -1 && args[sortIndex + 1]){ 
                const propertyToSort = args[sortIndex + 1];
                const sortedMovies = fs.getBySort(propertyToSort);
                console.log(`Las pelis ordenadas son : ${JSON.stringify(sortedMovies, null, 2)}`);
        }else if (searchIndex !== -1 && args[searchIndex + 1]){
            const keyword = args[seaGodfatherrchIndex + 1];
            const searchResults = fs.getBySearch(allMovies, keyword);
            console.log(`El resultado de la busqueda es: ${JSON.stringify(searchResults, null, 2)}`);
        
        }else{
            
             console.log("Las pelis son : ", allMovies);
        }
    }catch (error) {
            console.error('SE prdodujo un error: ', error);

    }
}

main();