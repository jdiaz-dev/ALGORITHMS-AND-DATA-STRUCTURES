def zigzagTraverseTree (nodes):
    if len(nodes) == 0:
        return []

    tree = []
    tree.append([nodes[0]])

    zigzag = 0
    for x in range(1, len(nodes), 2):
        nodes_group = []
        if zigzag % 2 == 0:
            if nodes[x] != "null": nodes_group.append(nodes[x]) 
            if nodes[x + 1] != "null": nodes_group.append(nodes[x + 1])
        else:
            if nodes[x + 1] != "null": nodes_group.append(nodes[x + 1])
            if nodes[x] != "null": nodes_group.append(nodes[x]) 

        if len(nodes_group) != 0: 
            tree.append(nodes_group)


        if nodes[x] != "null" or nodes[x +1] != "null":
            zigzag += 1

    return tree

# res = zigzagTraverseTree([3,9,20,"null","null",15,7])
res = zigzagTraverseTree([1])
print(res)


