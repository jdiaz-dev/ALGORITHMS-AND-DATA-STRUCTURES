
//mi solución al ejercicio 3

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

/* sub arbol */
var subtree = new BinarySearchTree()
subtree.insertion(55)
subtree.insertion(57)
subtree.insertion(52)
subtree



/* ========================= MI SOLUCION AL EJERCICIO 3 ========================= */

/* revisamos si el arbol padre tiene como hijo el valor inicial del sub-árbol */
function check_if_element_is_son(tree, value){

    if( tree.value == value ||  !tree.left  ||  !tree.right ) return false  

    if(value < tree.value){
        if(value == tree.left.value){
            return tree.left
        }else{
            return check_if_element_is_son(tree.left, value)
        }
    }else{
        if(value == tree.right.value){
            return tree.right
        }else{
            return check_if_element_is_son(tree.right, value)
        }
    }

    return false
}

function check_elements(tree){
    let elements = []

    /* ordenamiento In Order */
    function check_elements_helper(tree){
        if( tree === null ) return

        check_elements_helper(tree.left)
        elements.push(tree.value)
        check_elements_helper(tree.right)
    }
    check_elements_helper(tree)
    
    return elements
}

/* inicio del ejercicio 3 */
function check_if_is_subtree(tree, subtree){
    let subtreeOfFather = check_if_element_is_son(tree, subtree.value)
    subtreeOfFather
    if(subtreeOfFather) {
        let elementsChildren = check_elements(subtreeOfFather)
        let elmentsSubtree = check_elements(subtree)

        //revisamos el tamaño de los array elementos
        if(elementsChildren.length === elmentsSubtree.length){
            for(let x = 0; x < elementsChildren.length; x++){
                if(elementsChildren[x] !== elmentsSubtree[x]) return false
            }
        }   
    }else{
        return false
    }

    return true
}

console.log(check_if_is_subtree(tree._root, subtree._root))

