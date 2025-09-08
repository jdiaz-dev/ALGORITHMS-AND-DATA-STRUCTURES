//pattern: DFS traverse (tree)
//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
const zigzagTraverseTree = (nodes) => {
    const tree = []
    
    if(nodes[0] !== null) tree.push([nodes[0]])
    
    let zigzag = 0
    for(let x = 1; x < nodes.length; x += 2){
        const nodesGroup = []

        if(zigzag % 2 == 0){
            if(nodes[x + 1] !== null) nodesGroup.push(nodes[x + 1])
            if(nodes[x] !== null) nodesGroup.push(nodes[x])

        }else{
            if(nodes[x] !== null) nodesGroup.push(nodes[x])
            if(nodes[x + 1] !== null) nodesGroup.push(nodes[x + 1])
        }

        if(nodes[x] !== null || nodes[x + 1] !== null){
            zigzag++
        }

        if (nodesGroup.length) tree.push(nodesGroup)
    }

    tree
    return tree
}
zigzagTraverseTree([3,9,20,null,null,15,7])



