/* 
    CAPITULO 14: almacenamiento en caché
            --caching es el proceso de almacenar datos temporalmente en la memoria, así esos datos pueden ser facilmente recuperados para usarlo más tarde si es requerido otra vez
            --un ejemplo es un sistema de base de datos que mantiene los datos en el cache(almacenados en cache) para evitar releer el disco duro
            --un navegador web almacena las páginas para evitar volver a descargar el contenido
            --el objetivo de un caché es maximizar las visitas(de un item que esta en el cache cuando es requerido) y minimizar las fallas(un item que no esta en el caché cuando es solicitado)

            --en este capitulo dos tecnicas de caché serán discutidos
                1. caching menos usado frecuentemete(LFU)
                2. caching menos usado recientemente(LRU)

            NOTA: el concepto de caching viene del mundo de los sistemas operativos

        **Understanding Caching
            --El diseño de caché generalmente considera estos dos factores
                1. localización temporal: una lozalización que recientemente ha sidos accedido que y es probable que se acceda otra vez 
                (reciente)

                2. localización espacial : una localización de la memoria cerca a la que se ha accedido recientemente y que es probable que se acceda nuevamente 
                (anterior al reciente)
            
            --la optimización del algoritmo de cache debería poder reemplazar parte del caché que sera usado en un futuro muy distante con el nuevo elemento a ser insertado. Esto requerira que cada item, dentro de cuanto tiempo en el futuro el item será accedido. Esto deberia ser obvio para ti que es imposible implementar porque requiere mirar en el futuro
        
        **Least Frequently Used Caching(LFU)
            -el almacenamiento menos frecuentemente usado es un algoritmo usado por el sistema operativo para administrar la memoria
            --cuando el caché exede su límte, el sistema elimina el boque menos frecuentemente usado
            --cada bloque cargado en el cache es asignado con un contador e incrementado cada vez que se hace referencia a ese bloque
            --cuando el caché exede su límite, el sistema busca el bloque con el contador mas y lo remueve del cache 

            --Aunque este enfoque parace intuitivo, no es ideal cuando un item en la memoria es referenciado repetidas veces por una cantidad corta de tiempo y no se accede otra vez
            --la frecuencia de ese bloque es alta, pero podría forzar al sistema a eliminar otros bloques que podrian ser utilizados frecuentemente
            --nuevos items en el sistema son susceptibles de ser eliminados rapidamente del sistema debido a su baja frecuencia

            --debido a esos problemas LFU es poco comun, pero sistemas hibridos utilizan el el núcleo del concepto de LFU, por ejemplo los teclados de los sistemas de aplicaciones móviles, dode la app sugiere palabras al teclado de la app, ahí si tiene mucho sentido implementear LFU caching, ya que el usuario probablemente usa la misma palabra muchas veces, donde la frecuencia de la palabra es útil para ver si la palabra debería existir en el cache

            --el LFU caching usa una lista doblemente enlazada para eliminar elementos en un tiempo O(1)
            --la LFU caching tiene un contador que representa la frecuencia de este elemento después de haber sido insertado en el primer tiempo

        **last Recently Used Caching(LRU)
            --El LRU es el algoritmo que elimina el ultimo elemento recientemente usado(es decir el primero que se usó)
            --cuando un item en el cache es accedido, ese item se mueve hacia atrás(el más nuevo en el orden) de la lista
            --cuando una página en el caché es accedido , el item del frente(o el más antiguo en el orden) es removido, y un nuevo item es puesto en la parte de atrás(siendo el más nuevo en el orden) de la lista
            --la implementación de este algoritmo requiere hacer seguimiento a cual nodo fue usado

            --para cumplir esto el LRU es implementado usando una lista vinculada doblemente y una tabla hash
            --la habla hash es necesario para hacer seguimiento a la cabeza(el más antiguo dato)
            --la doble lista enlazada es requerido debido al LRU
            --cada nuevo dato es insertado y la cabeza se mueve hasta que el tamaño sea exedido, entonces el más viejo dato es desalojado
        
        **summary


*/