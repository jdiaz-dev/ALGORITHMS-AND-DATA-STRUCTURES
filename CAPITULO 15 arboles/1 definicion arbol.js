
/* 
    ARBOLES
    --un arbol está compuesto de nodos con nodos hijos
    --el primer nodo es llamado nodo raiz
    --en este capitulo varios tipos de arboles como árboles binarios, busqueda de árboles binarios y busqueda binaria de árboles autoequilibrantes
*/

/* ­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■■­■■■ DEFINICION  ­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■­■■■■­■■■ */
/* nodo del árbol */
function TreeNode(value){
    this.value = value
    this.children = []
}

/* ARBOL BINARIO : es un tipo de árbol binario que solamente tiene dos nodos hijos (derecha e izquierda) */
function BinaryTreeNode(value){
    this.value = value
    this.left = null
    this.right = null
}