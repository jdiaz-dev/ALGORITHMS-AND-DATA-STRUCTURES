

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

//metodo para remover nodo
//tras eliminar el nodo sera sustuido por el siguiente nodo ordenador por "In Order", o reemplazar el nodo mas izquierdo el nodo derecho
BinarySearchTree.prototype.remove = function(value){

    return deleteRecursively(this._root, value)

    function deleteRecursively(_root, value){
        
        if( !_root ){
            return null
        }else{
            
            if(value < _root.value){    //busca en el nodo izquierdo
                _root.left = deleteRecursively(_root.left, value)
            
            }else if(value > _root.value){  //busca en el nodo derecho
                _root.right = deleteRecursively(_root.right, value) //18
            
            }else{  //el valor es encontrado

                if( !_root.left && !_root.right){ //caso 1: no tiene hojas
                    return null
                }else if(_root.left == null){   //caso 2: solo tiene hoja derecha
                    _root = _root.right
                    return _root
                }else if(_root.right == null){  //caso 2: solo tiene hoja izquierdo
                    _root = _root.left
                    return _root
                }else{     //caso 3: tiene dos hojas
                    let temp = findMin(_root.right)
                    _root.value = temp.value
                    _root.right = deleteRecursively(_root.right, temp.value)
                    return _root
                }
            }
            
            //este return forma parte del algoritmo, no solamente es para devolver una respuesta de la función
            return _root    
        }
    }
    
    //encuentra el valor más a la izquierda del nodo derecho
    function findMin(_root){
        while(_root.left){
            _root = _root.left
        }
        return _root
    }

    /* 
        Complejidad de timepo(para árboles desbalanceados)  O(n)
        Complejidad de tiempo(para árboles balanceados)  O( log2 (n) )
    */
}

//metodo para buscar nodo
BinarySearchTree.prototype.search = function(value){
    if(value == undefined)  return false

    let currentRoot = this._root,
        found = false

    while(currentRoot){
        if(currentRoot.value > value){
            currentRoot = currentRoot.left
        }else if(currentRoot.value < value ){
            currentRoot = currentRoot.right
        }else{

            //encontramos el nodo
            found = true
            break
        }
    }
    
    return found

    /* 
        Complejidad de timepo(para árboles desbalanceados)  O(n)
        Complejidad de tiempo(para árboles balanceados)  O( log2 (n) )

        --la compelejidad siempre va a depender de la altura de los árboles binario de busqueda, por ello hay familias de árboles de busqueda binaria que se encagargan que el árbol este balanceado
    */
}

var tree = new BinarySearchTree()
tree.insertion(50)
tree.insertion(40)
tree.insertion(60)
tree.insertion(35)
tree.insertion(45)
tree.insertion(55)
tree.insertion(65)
tree.insertion(25)
tree.insertion(37)
tree.insertion(42)
tree.insertion(48)
tree.insertion(52)
tree.insertion(57)
tree.insertion(62)
tree.insertion(68)
tree.insertion(67)

//removemos un nodo
console.log(tree.remove(65))

//buscamos un nodo
console.log(tree.search(48))
tree
