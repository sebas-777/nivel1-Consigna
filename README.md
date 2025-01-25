# nivel1-Consigna

## Desafío  
Para completar este desafío vas a poner a prueba todas las herramientas y todos los conceptos que vimos hasta ahora.

Para eso, te proponemos que construyas una app que te permita filtrar una lista de películas según los parámetros que te proponemos.

Ejemplo:

~~~
Copiar
node index.js --sort title

~~~


### Objetivo

La aplicación tiene que recibir argumentos a través de la terminal y mostrar un listado de películas basado en los argumentos que le hayas pasado.  

### Arquitectura

Tu aplicación debe tener estos 3 archivos: 


- `index.js`

Recibe argumentos, los procesa y delega las acciones a `pelis.js.`

- `pelis.js`

Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.

-`pelis.json`

Es una colección (array de objetos) que tiene los datos de las películas. Cada película (cada objeto del array) puede tener las propiedades que quieras, pero deben tener al menos estas tres propiedades: `title, rating y tags.`

~~~
[{
  "title": "Titulo de la película",
  "rating": 4,
  "tags": ["acción", "favorita", "nueva"],
  //otras propiedades
},
{
  "title": "Titulo de la segunda película",
  "rating": 3,
  "tags": ["favorita", "nueva"],
  //otras propiedades
}]
~~~

Los nombres de los archivos deben ser exactamente: `index.js, pelis.js y pelis.json`

### Escenarios posibles

Tu aplicación debe aceptar distintas combinaciones de argumentos. Veamos algunos casos.

### 1) Sin parámetros

~~~
node index.js
~~~

Si no le pasás ningún argumento, la aplicación tiene que devolver todas las películas. Podés imprimir la salida en cualquier formato, por ejemplo: console.table()

### 2) Sort
~~~
node index.js --sort {nombreDeLaPropiedad}
~~~

El argumento `--sort` debe ordenar la salida en base a ese parámetro.

~~~
node index.js --sort title
~~~

Devuelve las películas en orden alfabético basándose en su título (propiedad title)

Importante: El argumento sort debe soportar cualquier propiedad, por ejemplo rating.

### 3) Search
~~~
node index.js --search {searchCriteria}
~~~

El argumento `--search` debe devolver las películas que tienen el texto del argumento.
~~~
node index.js --search magic
~~~

Debería devolver las películas que tengan la palabra `"magic"` en su titulo.

### 4) Tag
~~~
node index.js --tag {nombreDelTag}
~~~

Si le pasás el argumento `--tag` debe devolver las películas que tienen ese tag.
~~~
node index.js --tag thriller
~~~

Debería devolver las películas que tengan el tag `acción.Importante:` El argumento `tag es en singular.` Si bien en el `JSON` dice `tags (en plural)`, el argumento que hay que pasarle a tu programa es en singular, porque busca de a un tag a la vez.


### Tips

Tengan en cuanta leer su archivo pelis.json de esta forma:

~~~
fs.readFileSync(__dirname +"/pelis.json")
~~~

`__dirname` es una referencia al directorio actual. Esto asegura que Node encuentre el archivo en distintas situaciones como el test automático.

### Mayúsculas y minúsculas

Las computadoras por defecto son `case sensitive.` O sea que es `sensible a las mayúsculas y minúsculas.` Esto es porque hay una gran diferencia entre una `A` y una `a.` Si bien las letras se parecen mucho en la memoria RAM una `"a" equivale a 01100001` y una `"A" equivale a 01000001.` Para la computadora esto es totalmente distinto y es por eso que podemos llegar a encontrarnos con situaciones inesperadas.


Además de tener extremo cuidado una de las posibles soluciones es que ciertas partes de tu programa sean case insensitive (insensibles a mayúsculas).

~~~
var miNombre = "Marce";
var nombreGuardado = "marce";

var sonIguales = miNombre == nombreGuardado;
// sonIguales va a ser falso

// en cambio si pasamos ambos terminos a minúsculas podemos compararlos independientemente de las mayúsculas o minúsculas
var sonIguales = miNombre.toLowerCase() == nombreGuardado.toLowerCase();

// ahora si, sonIguales va a ser true ya que pasamos ambos textos a minúsculas antes de compararlos
~~~

### Finalmente

El desafío te puede llevar varios días. ¡A no desesperar! Apoyate en Discord para ir resolviendo cada parte y ¡no te apures! Esta etapa es la más difícil. Todos los conceptos son nuevos y cuesta un tiempo adaptarse ¡Éxitos!

###  Entregable

Creá tu gist con los 3 archivos dentro y enviá la URL junto con las observaciones necesarias.


