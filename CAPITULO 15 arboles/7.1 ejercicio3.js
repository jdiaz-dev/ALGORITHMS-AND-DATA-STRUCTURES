
//del libro ejercicio 3
function isSameTree(tree, subtree){
    if( !tree && !subtree) return true

    if( !tree || !subtree) return false

    //al final solo retornara false o true
    return tree.value === subtree.value && 
           isSameTree(tree.left, subtree.left) && 
           isSameTree(tree.right, subtree.right)
}


function checkIfSubTree(tree,subtree){
    let queue = []

    queue.push(tree)

    while(queue.length){
        let temp = queue.shift()
        
        if(temp.value === subtree.value && isSameTree(temp, subtree)) return true

        if(temp.left) queue.push(temp.left)
        if(temp.right) queue.push(temp.right)
    }

    return false
}
var node1 = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 1
        },
        right: {
            value: 2
        }
    },
    right: {
        value: 7
    }
}

var node2 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2
    }
}

var node3 = {
    value: 3,
    left: {
        value: 1
    }
}
//solo es un sub arbol si además de los componentes del del sub-árbol, tiene hojas iguales
console.log(checkIfSubTree(node1, node2)); // true
console.log(checkIfSubTree(node1, node3)); // false
console.log(checkIfSubTree(node2, node3)); // false






