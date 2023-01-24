//mi solución al ejercicio 1

var tree1 = {
    value: 1,
    left: {
        value: 0
    },
    right: {
        value: 2
    }
}

var tree2 = {
    value: 1,
    left: {
        value: 0,
        left: {
            value: -1
        },
        right: {
            value: 0.5
        }
    },
    right: {
        value: 2
    }
}

function commonAncestor(tree, value1, value2){
    if(value1 == tree.value || value2 == tree.value) return 'un valor es el ancestro'

    function commonAncesterHelper(tree, value){
        

        if( value < tree.value){

            //revisamos si valor podria estar en su hijo izquierdo
            if(value == tree.left.value){

                //caso base
                return tree.value
            }else{
                return commonAncesterHelper(tree.left, value)
            }
 
        }else{

            //revisamos si valor podria estar en su hijo derecho
            if(value == tree.right.value){

                //caso base
                return tree.value
            }else{
                return commonAncesterHelper(tree.right, value)
            }
        }
         
    }

    let fatherNode1 = commonAncesterHelper(tree, value1)
    fatherNode1
    let fatherNode2 = commonAncesterHelper(tree, value2)
    fatherNode2

    if(fatherNode1 === fatherNode2){
        return fatherNode1
    }else{
        return 'No tienen el mismo padre'
    }
    
}

console.log(commonAncestor(tree1, 0, 2))
console.log(commonAncestor(tree2, -1, 0.5))