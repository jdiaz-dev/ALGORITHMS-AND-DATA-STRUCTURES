const _tree = {
    value: 50,
    left: {
        value: 40,
        left: {
            value: 35,
            left: null,
            right: null
        },
        right: {
            value : 45,
            left: null,
            right: null
        }
    },
    right: {
        value: 60,
        left: {
            value: 55,
            left: null,
            right: null
        },
        right:{
            value: 67,
            left: null,
            right: null
        }
    }
}

const BFStraversal = (tree) => {
    const queue = []
    const traversed = []

    queue.push(tree) 
    while(queue.length){
        let currNode = queue.shift()
        traversed.push(currNode.value)

        if(currNode.left) queue.push(currNode.left)
        if(currNode.right) queue.push(currNode.right)
    }
    traversed
    return queue
}
BFStraversal(_tree)

const traversedPreOrder = []
const preOrderTraversal  = (tree) => {

    
    if(!tree) return
    traversedPreOrder.push(tree.value)
    preOrderTraversal(tree.left)
    preOrderTraversal(tree.right)
}
preOrderTraversal(_tree)
traversedPreOrder

const traversedPreOrder2 = []
const inOrderTraversal = (tree) => {
    if(!tree) return

    inOrderTraversal(tree.left)
    traversedPreOrder2.push(tree.value)
    inOrderTraversal(tree.right)
}
inOrderTraversal(_tree)
traversedPreOrder2


const traversedPreOrder3 = []
const postOrderTraversal = (tree) => {
    if(!tree) return

    postOrderTraversal(tree.left)
    postOrderTraversal(tree.right)
    traversedPreOrder3.push(tree.value)
}
postOrderTraversal(_tree)
traversedPreOrder3

