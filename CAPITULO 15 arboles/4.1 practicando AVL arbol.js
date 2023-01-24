'use strict'

/*■■■■■■■■■■■■■■■■■■■■■■■■■■■■ ARBOL AVL ■■■■■■■■■■■■■■■■■■■■■■■■■■■■  */
// con el árbol de busqueda binario AVL nos asegurnamos de mantener la alutura del árbol balanceada y tenner una complejidad logarítmica para la insersión, elimnación y búsqueda de nodos

/* insersion en el árbol AVL */
//la inserción en un árbol AVL es igual a un BST, con la exepción que el padre debe balancear sus hijos y establecer la profundidad

//implementación de arbol
function AVLTree(value){
   this.left = null
   this.right = null
   this.value = value
   this.depth = 1
}
AVLTree.prototype.setDepthBasedOnChildren = function(){
   if(this.value == null){
      this.depth = 0
   }else{
      //siempre volvemos a establecer el la profuncidad en 1 para redifinirla en función a sus hijos
      this.depth = 1 
   }

   if(this.left != null){
      this.depth = this.left.depth + 1
   }

   //evitamos aumentar la produndidad si ya ya se subió insertando en left
   if(this.right != null && this.depth <= this.right.depth){
      this.depth = this.right.depth + 1
   }
}

/* rotación desde la izquierda */
AVLTree.prototype.rotationLL = function(){
   //guardamos en temporales los anteriores
   let valueBefore = this.value
   let rightBefore =  this.right
   this.value = this.left.value

   //reconfiguramos this.right
   this.right = this.left
   this.left = this.left.left
   this.right.left = this.right.right
   this.right.right = rightBefore
   this.right.value = valueBefore

   this.right.setDepthBasedOnChildren()
   this.setDepthBasedOnChildren()

}
/* rotación desde la derecha */
AVLTree.prototype.rotationRR = function(){
   //guardaremos los anteriores en un temporal
   let valueBefore = this.value
   let leftBefore = this.left
   this.value = this.right.value

   //reconfiguramos de nuevo this.left
   this.left = this.right  
   this.right = this.right.right
   this.left.right = this.left.left
   this.left.left = leftBefore
   this.left.value = valueBefore
   
   this.left.setDepthBasedOnChildren()
   this.setDepthBasedOnChildren()
}
AVLTree.prototype.balance = function(){
   var ldepth = this.left == null ? 0 : this.left.depth 
   var rdepth = this.right == null ? 0 : this.right.depth

   if(ldepth > rdepth + 1){
      let lldepth = this.left.left == null ? 0 : this.left.left.depth
      let lrdepth = this.left.right == null ? 0 : this.left.right.depth
     
      //si no tiene forma de lista hacemos una primera rotación
      if(lrdepth > lldepth){
         //en caso de doble rotación, la primera rotación en la izquierda es: rotación desde la derecha
         this.left.rotationRR()
      }
      this.rotationLL()
   }else if(ldepth + 1 < rdepth){     
      let rldepth = this.right.left == null ? 0 : this.right.left.depth
      let rrdepth = this.right.right == null ? 0 : this.right.right.depth

      //si no tiene forma de lista hacemos una primera rotación
      if(rldepth > rrdepth){
         //en caso de doble rotación, la primera rotación en la derecha es: rotación desde la izquierda
         this.right.rotationLL()
      }
      this.rotationRR()
   }
}
AVLTree.prototype.insert = function(value){
   let childInserted = false
   
   if(value == this.value){
      return false
   }else if(value < this.value){

      //caso base
      if(this.left === null){
         this.left = new AVLTree(value)
         childInserted = true
      }else{
                        //donde this.left = AVLTree()
         childInserted = this.left.insert(value) 
         
         //si se ha bajado un nivel entonces balanceamos
         if(childInserted == true) this.balance()
      }
   }else if(value > this.value){
      if(this.right === null){
         this.right = new AVLTree(value)
         childInserted = true
      }else{
         childInserted = this.right.insert(value)
         if(childInserted == true)  this.balance()
      }
   }
    
   if(childInserted == true) this.setDepthBasedOnChildren()
   return childInserted
}
/* AVLTree.prototype.delete = function(value){

   if(this.value === value){
      if(this.left == null && this.right == null){
         this.value = null
      }else if(this.left == null){
         this.value = this.right.value
      }else if(this.right == null){
         this.value = this.left.value
      }else{
         this.value = this.right.value
         this.right = this.
      }
   }
} */
AVLTree.prototype.remove = function(value){

   return deleteRecursively(this, value)

   function deleteRecursively(root, value){

      if( !root ){
         return false
      }else if(value < root.value){
         root.left = deleteRecursively(root.left, value)
      }else if(value > root.value){
         root.right = deleteRecursively(root.right, value)

      }else{ //el valor fue encontrado
         if(root.right === null && root.left === null){//caso 1: no tiene hojas
            return null
         }else if(root.left === null){//caso 2: tiene solamente hijo derecha
            root.value = root.right.value
            return root
         }else if(root.right === null){//caso 2: tiene solamente hijo izquierda
            root.value = root.left.value
         }else{ //caso 3: tiene dos hijos
            let temp = findMid(root.right)
            root.value = temp.value
            root.right = deleteRecursively(root.right, temp.value)
            root.setDepthBasedOnChildren()
            return root
         }
      }

      root.setDepthBasedOnChildren(); // la única diferencia comparado con el BST 

      //este return forma parte del algoritmo, no solamente es para devolver una respuesta de la función
      return root;
   }

   function findMid(root){
      while(root.left){
         root = root.left
      }
      return root
   }
}
var AVL_BST = new AVLTree(1) //ingresamos un valor para inicializar el árbol
AVL_BST.insert(2);
AVL_BST.insert(3);
AVL_BST.insert(4);
AVL_BST.insert(5);
AVL_BST.insert(123);
AVL_BST.insert(203);
AVL_BST.insert(2222);

console.log(AVL_BST)
