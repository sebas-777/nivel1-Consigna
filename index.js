const fs = require('./pelis.js');

function main() {
    
    try {
        
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
                const searchCriteria = args[searchIndex + 1];
                const moviesBySearch = fs.getBySort(searchCriteria);
                console.log(`Las pelis encontradas son : ${JSON.stringify(moviesBySearch, null, 2)}`);
        
        }else{
            const allMovies = fs.getAll();
             console.log("Las pelis son : ", allMovies);
        }
    }catch (error) {
        console.error('SE prdodujo un error: ', error);

    }
}

main();