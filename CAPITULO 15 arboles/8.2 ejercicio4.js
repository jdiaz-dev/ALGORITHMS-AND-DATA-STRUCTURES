
//mi solución al ejercicio 4
function isMirrorTree(tree1, tree2){
    //revisamos la forma del árbol(caso base)
    if(( !tree1 && !tree2 )) return true
    if(( !tree1 || !tree2)) return false

    return tree1.value == tree2.value 
            && isMirrorTree(tree1.left, tree2.right) 
            && isMirrorTree(tree1.right, tree2.left)
}

var node1 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2
    }
}

var node2 = {
    value: 3,
    left: {
        value: 2
    },
    right: {
        value: 1
    }
}

var node3 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2,
        left: {
            value: 2.5
        }
    }
}

console.log(isMirrorTree(node1, node2)); // true
console.log(isMirrorTree(node2, node3)); // false