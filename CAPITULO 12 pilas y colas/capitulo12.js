/* 
    CAPITULO 12: Pilas y colas
            --Las pilas y colas son implementadas en otras estructuras de datos mas complejas
        **Stacks
            //DE WEB
            --Son las estructuras de datos mas basicas
            --Es mas simple que una matriz
            --La complejidad de un array es O(n), debido a su iteracion
            --la complejidad de una pila es O(1) en todas sus metodos (push, pop, peek, empty, size, swap)
            --Para "revisar" algun n elemento, esto se hace desde arriba pero su complejidad es O(n)
            --Para "busqueda" O(n)

            //DEL LIBRO
            --Es una estructura de dato en la cual el ultimo elemento insertado puede ser removido y accdedido
            --Su principio es LIFO(last in, first out)
            --Es genial porque es rapido
            --Ya que se sabe el ultimo elemento que puede ser removido, la busqueda e insercion sucede en un tiempo constante O(1)
            --Los stacks deben usarse sobre las matrices cuando se debe trabajar con datos en forma de LIFO

            --Su limitacion es que si quieres acceder a datos que no son los ultimos se debe remover los datos que estan encima de la estructura

*/