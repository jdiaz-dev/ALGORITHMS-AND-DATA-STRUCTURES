/* 
    //6 AGRUPACION
    (\b[a-z]+)      lo que esta dentro de un parentesis lo busca y lo "guarda"
    (\b[a-z]+).(\b[a-z]+)       con el punto en el medio seleccionara tambien el "espacio" entre (perro gato)
    (?:\b[a-z]+)    para que la informacion no la "guarde" en una variable el valor encotrado  

    -para ver en las variables guardadas - en herramientas en la seccion "list" - ponemos $(# de variable)




    //7 EJERCICIOS
    ^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$      validacion de correo
    lordgelsin26@gmail.com
    korah.26.@gmail.uk
    korah.26.@gmail.uk.pu



    
    ^\d+[A-Z]{1}$       validacion de DNI español
*/