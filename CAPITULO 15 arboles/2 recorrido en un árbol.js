

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
tree



/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ATRAVESAR ARBOLES ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
//un árbol binario tiene un nodo raiz 
function BinaryTree(tree = null){
    this._root = tree
}

/* ORDENAMIENTO PRE ORDER */
//nodo - izquierda -derecha
//método Pre Order para atravesar todo el árbol primero muestra el valor del nodo y luego hace llamadas recursivas para derecha e izquierda
BinaryTree.prototype.traversePreOrder = function(){
    traversePreOrderHelper(this._root)

    function traversePreOrderHelper(node){
        
        //caso base 
        if( !node ) return 
        
        console.log(node.value)
        traversePreOrderHelper(node.left)
        traversePreOrderHelper(node.right)
    }
}
var arbol_1 = new BinaryTree(tree._root)
arbol_1.traversePreOrder()


//también se puede hacer Pre Order iterando pero es más difícil
BinaryTree.prototype.traversePreOrderIterative = function(){
    let nodeStack = []
    nodeStack.push(this._root)
    
    //popeamos todos los items uno por uno. Siguiendo para cada item popeado
    //  a)lo imprimimos
    //  b)pusheamos su hijo derecho
    //  c)pusheamos su hijo izquierdo
    //  notar que el primer hijo pusheado es el derecho, así que el hijo izquierdo es procesado primero
    while(nodeStack.length){
        let node = nodeStack.pop()
        console.log(node.value)

        if(node.right)  nodeStack.push(node.right)
        if(node.left)   nodeStack.push(node.left)

    }
}
var arbol_2 = new BinaryTree(tree._root)
arbol_2.traversePreOrderIterative()


/* ORDENAMIENTO IN ORDER */
//izquierda - nodo - derecha
//la implementación recursiva del método In-Order es pareceida a la Pre Order 
BinaryTree.prototype.traverseInOrder = function(){

    traverseInOrderHelper(this._root)

    function traverseInOrderHelper(node){

        //caso base
        if( !node) return 

        traverseInOrderHelper(node.left)
        console.log(node.value)
        traverseInOrderHelper(node.right)
    }
}
var arbol_3 = new BinaryTree(tree._root)
arbol_3.traverseInOrder()

BinaryTree.prototype.traverseInOrderIterative = function(){
    let current = this._root,
        s = [],
        done = false

        
    while(!done){
        if(current != null){

            //guardamos el nodo desde la raiz en el array, y siempre intentamos llegar al nodo izquierdo del árbol
            s.push(current)
            current = current.left

        }else{
            if(s.length){
                current = s.pop()
                console.log(current.value)
                current = current.right
            }else{
                done = true
            }
        }
    }
}

var arbol_4 = new BinaryTree(tree._root)
arbol_4.traverseInOrderIterative()


/* ORDENAMIENTO POST-ORDER */
//izquierda - derecha - raiz
BinaryTree.prototype.traversePostOrder = function(){
    traversePostOrderHelper(this._root)

    function traversePostOrderHelper(node){

        //el caso base es cuando no node.left o node.right no tenga más nodos
        if(node.left) traversePostOrderHelper(node.left)
        if(node.right) traversePostOrderHelper(node.right)

        console.log(node.value)
    }
}
var arbol_5 = new BinaryTree(tree._root)
arbol_5.traversePostOrder()

//hacerlo de forma iterativa siempre es más difícil
BinaryTree.prototype.traversePostOrderIterative = function(){
    let stack1 = [],
        stack2 = []

    stack1.push(this._root)

    while(stack1.length){
        let node = stack1.pop()
        stack2.push(node)

        if(node.left) stack1.push(node.left)
        if(node.right) stack1.push(node.right)
    }

    while(stack2.length){
        let  node = stack2.pop()
        console.log(node.value)
    }
}
var arbol_6 = new BinaryTree(tree._root)
arbol_6.traversePostOrderIterative()


/* ORDENAMIENTO A NIVEL TRANSVERSAL */
//el ordenamiento se hace cada nivel del árbol
BinaryTree.prototype.traverserLevelOrder = function(){
    let _root = this._root,
        queue = []

    queue.push(_root)

    while(queue.length){
        let node = queue.shift()
        console.log(node.value)

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
}
var arbol_7 = new BinaryTree(tree._root)
arbol_7.traverserLevelOrder()