class Node:
    def __init__(self, value=None, left_child=None, right_child=None):
        self.value = value
        self.left_child = left_child
        self.right_child = right_child
        self.isword = ''
 
 
class BinaryTree:
    def __init__(self):
        self.root = None
 
    def insert(self, word):
        char_list = list(word)
        if self.root is None:
            self.root = Node(char_list[0])
            del char_list[0]
        end_node = self._insert(char_list, self.root)
        end_node = word
 
    def _insert(self, char_list, cur_node):
        for char in char_list:
            if cur_node.value is None:
                cur_node.value = char
                del char_list[0]
                if len(char_list) == 0:
                    return cur_node.isword
                cur_node.left_child = Node()
                return self._insert(char_list, cur_node.left_child)
            elif char == cur_node.value:
                del char_list[0]
                if len(char_list) == 0:
                    return cur_node.isword
                cur_node.left_child = Node()
                return self._insert(char_list, cur_node.left_child)
            # elif char != cur_node:
            else:
                cur_node.right_child = Node()
                return self._insert(char_list, cur_node.right_child)
 
    def search(self, word):
        if self.root is None:
            return False
        else:
            return self._search(word, cur_node=self.root)
 
    def _search(self, word, cur_node, char_list=None):
        if char_list is None:
            char_list = list(word)
        elif len(char_list) == 0:
            return False
 
        if cur_node.value is None:
            return False
        elif cur_node.value != char_list[0]:
            self._search(word, cur_node.right_child, char_list)
        elif cur_node.value == char_list[0]:
            if cur_node.isword == word:
                return True
            del char_list[0]
            self._search(word, cur_node.left_child, char_list)
 
    def print_tree(self):
        if self.root is None:
            print('Tree is empty!')
        else:
            self._print_tree(self.root)
 
    def _print_tree(self, cur_node):
        if cur_node is None:
            # print('Node is empty')
            pass
        else:
            self._print_tree(cur_node.left_child)
            print(str(cur_node.value))
            self._print_tree(cur_node.right_child)
 
 
tree = BinaryTree()
tree.insert('tesa')
tree.insert('term')
# tree.insert('tell')
 
# print(tree.search('test'))
 
tree.print_tree()
print()
print(tree.root.value)