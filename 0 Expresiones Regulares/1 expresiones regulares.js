
/*
    expresiones regulares           https://regexr.com/



    \        escapado de caracteres
    [A-S]    para seleccionar un rango de mayusculas
    [^abc]   selecciona todos menos la "a,b,c"
    \W       selecciona todos los cararecteres que no sean alfabeticos
    \D       selecciona todo lo que no sea un digito
    \S       selecciona todo lo que no sea un espacio en blanco
    .        selecciona todos los caracteres
    \.       selecciona solamente el punto, tras haber seleccionado el escapado de caracteres
    *        Coincide con el carácter o grupo de caracteres anteriores de la expresión regular de cero o más veces.


    //3 ESCAPADO DE CARACTERES
    \......  podremos seleccionar cualquier carater reservado unando la barra de escape


    //4 BANDERAS
    --bandera "g" (global)
    --sin la bandera "g" solamente cogenremos la primera conincidencia

    --bandera "i" (case insensitive)
    --al seleccionar omite si esta en mayuscula o minuscula

    --bandera "m" (para poder seleccionar lineas)
    /.+:$/    (.)cualquier caracter
              (+)mas de uno
              (:)que termine en dos puntos
              ($)final de la linea

    /^e.+/    (^e)que empieze por 'e'
              (.)que siga cualquier caracter y que sea mas de uno
              (+)que sea mas de un caracter

    /^\w.+:$/  (^\w)todos los caracteres que comienzen con alfanumericos
              (.)que siga cualquier caracter
              (+)que sea mas de un caracter
              (:)con coincidencias que terminen en puntos
              ($)al final de linea



    **ANCHORS - (\b)  limite de palabra

    /s/       (s)que empiezen en "s"
    \b  -- limite de palabra





    //5 CARACTERES CUANTIFICADORES
    /es+/    seleccionara la "e", y mas de un caracter "s" seguido de la primera "s"
    /es*   /   o ninguna o todas las "e" o "es"
    /es?/   o bien ninguno o como maximo uno    (osea opcional)
    /[a-z]{3,}/   de "a" a la "z" en grupos de minimo 3 y máximo lo que se pueda
    /[a-z]{3,5}/   de "a" a la "z" en grupos de minimo 3 y máximo 5


*/
/*
    practicing
        [a-zA-Z0-9_ ]*$

*/