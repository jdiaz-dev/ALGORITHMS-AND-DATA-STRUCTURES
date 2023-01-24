/* BIG-O con Javascript */
    /* NOTA: solo revisa la teria, en algún punto de los ejemplos tendras errores */
      
    const smArr = [5, 3, 2, 35, 2];

    const bigArr = [5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2];


    /*--- O(1)--- */
    //toma la misma cantidad de tiempo sin importar la longitud del array: Ejm: como empujar un numero, obtener un item de un particula indice, añadir un elemento hijo,etc
    const a1 = performance.now();
    smArr.push(27);
    const a2 = performance.now();
    console.log(`Time: ${a2 - a1}`); // Less than 1 Millisecond
    console.log('--------------------------------')

    


    /*--- O(n)--- */
    //por defecto todos los bucles son un ejemplo de cremiento lineal, Hay un relacion entre el tamaño del dato y el tiempo de completacion. Ejm: si hay Si hay 1000 veces mas items, tomara 1000 veces mas tiempo
    /* const b1 = performance.now();
    bigArr.forEach(item => console.log(item));
    const b2 = performance.now();
    console.log(`Time: ${b2 - b1}`); // 13 Milliseconds */
    


    /*--- O(n^2)--- */
    //El crecimiento exponencial es una trampa en el que todos hemos caido alguna vez. ¿Necesitas encontrar un par coincidente para cada articulo en una matriz?. Poner un bucle dentro de otro bucle es una exelente manera de convertir una matriz de 1000 articulos en un millon de operaciones de busqueda que congelara su navegador. Siempre es mejor tener que realizar 2000 operaciones en 2 bucles separados que un millon con dos bucles anidados
    const b1 = performance.now();
    bigArr.forEach(() => {
        arr2.forEach(item => console.log(item));
    });
    const b2 = performance.now();
    console.log(`Time: ${b2 - b1}`); // 307 Milliseconds



    /*--- O( log(n) )--- */
    //la cantidad de datos es de un millon pero el numero de ejecucion es 19 veces porque el log en base 2 de un millon es 19
    const crecimientoLogaritmico = (n) => {
        let contador = 0
        for(let i=2; i <= n; i *=2 ){
            contador++
            console.log(i,contador)
        }   
    }
    const resultado = crecimientoLogaritmico(1000000)
    


    /*--- O( n! )--- */
    //finalmente una de las peores posibilidades, el crecimiento factorial
    const factorial = n => {
        let num = n;

        if (n === 0) return 1
        for (let i = 0; i < n; i++) {
            num = n * factorial(n - 1);
        };

        return num;
    };