// ================================================ 3
//check if one three is a subtree of other tree
var tree1 = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 1,
    },
    right: {
      value: 2,
    },
  },
  right: {
    value: 7,
  },
};

var tree2 = {
  value: 3,
  left: {
    value: 1,
  },
  right: {
    value: 2,
  },
};

var tree3 = {
  value: 3,
  left: {
    value: 1,
  },
};
/*
      - traverse big tree
      - check if one one is equal to anohter
  */

function verifyIfIsSubTree(_tree, _subtree) {
  function verifyIfIsSubTreeHelper(tree, subtree) {
    if (!subtree) return true;

    if (!tree) return false;

    if (tree.value === subtree.value) {
      return (
        verifyIfIsSubTreeHelper(tree.left, subtree.left) &&
        verifyIfIsSubTreeHelper(tree.right, subtree.right)
      );
    }

    if (tree.value > subtree.value) {
      return verifyIfIsSubTreeHelper(tree.left, subtree);
    } else if (tree.value < subtree.value) {
      return verifyIfIsSubTreeHelper(tree.right, subtree);
    }
  }

  return verifyIfIsSubTreeHelper(_tree, _subtree);
}

const res1 = verifyIfIsSubTree(tree1, tree2);
res1;

const res2 = verifyIfIsSubTree(tree1, tree3);
res2;
