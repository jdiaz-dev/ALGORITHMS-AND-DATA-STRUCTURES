
//mi solución al ejercicio 2


/* ­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■ ARBOL DE BUSQUEDA BINARIA ­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■ */
//el nodo incial de un arbol de busqueda bianaria tiene un nodo null
function BinarySearchTree(){
    this._root = null
}
BinarySearchTree.prototype.insertion = function(value){
    let thisNode = {left:null, right:null, value:value}

    //si el BST está vacio establecemos un nuevo nodo
    if( !this._root ){
        this._root = thisNode

    
    }else{
        let currentRoot = this._root
        while(true){
            if(currentRoot.value > value){
                //en el caso que el nodo reciente sea menor que que la raiz
                //avanzamos uno si es diferente de null
                //insertamos un nuevo nodo si es null
                if(currentRoot.left != null){
                    currentRoot = currentRoot.left
                }else{
                    currentRoot.left = thisNode
                    break
                }
            }else if(currentRoot.value < value){
                //en el caso que el nodo reciente sea mayor que que la raiz
                //avanzamos uno si es diferente de null
                //insertamos un nuevo nodo si es null
                if(currentRoot.right != null){
                    currentRoot = currentRoot.right
                }else{
                    currentRoot.right = thisNode
                }
            }else{
                //en el caso que ambos nodos sean iguales
                break
            }
        }
    }
    /* 
        --complejidad de tiempo para árboles balanceados O(log2 (n))
        --complejidad de tiempo para árboles desbalanceados O(n)
        --el tiempo de complejidad depende directamente de la altura de los árboles
    */
}


var tree = new BinarySearchTree()
tree.insertion(50)
tree.insertion(40)
tree.insertion(60)
tree.insertion(35)
tree.insertion(45)
tree.insertion(55)
tree.insertion(67)
tree.insertion(25)
tree.insertion(37)
tree.insertion(42)
tree.insertion(48)
tree.insertion(52)
tree.insertion(57)
tree.insertion(62)
tree.insertion(68)


/* mi solución al ejercicio 2 : imprimir todos los hijos de una árbol, dada su altura */
function levelOrder(tree,k){
    let childrenHeight_Nth = []
        queue = []

    //donde 0 es la raiz
    queue.push([tree, 0])

    while(queue.length){
        let temp = queue.shift()
            tuple = temp[0]
            height = temp[1]

        if(height == k){
            childrenHeight_Nth.push(tuple.value)
        }

        if(tuple.left){
            queue.push([tuple.left, height + 1])
        }
        if(tuple.right){
            queue.push([tuple.right, height + 1])
        }
    }

    return childrenHeight_Nth

    /* 
        Complejidad de tiempo O(n) -> debido a que atravieso todo el arbol para almacenar sus nodos
    */
}

console.log(levelOrder(tree._root,3))