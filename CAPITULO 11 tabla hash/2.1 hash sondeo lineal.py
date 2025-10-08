

class HashTable:
    def __init__(self, size):
        self.size = size
        self.keys = self.init_array(size)
        self.values = self.init_array(size)
        self.limit = 0

    def put(self, key, value):
        if self.limit >= self.size: raise Exception("hash table is full")

        hashedIndex = self.hash(key)

        while self.keys[hashedIndex] is not None:
            hashedIndex += 1
            hashedIndex = hashedIndex % self.size

        self.keys[hashedIndex] = key
        self.values[hashedIndex] = value
        self.limit += 1

    def get(self, key):

        hashedIndex = self.hash(key)

        while self.keys[hashedIndex] != key:
            hashedIndex += 1
            hashedIndex = hashedIndex % self.size

        return self.values[hashedIndex]

    def hash(self, key):
        if not isinstance(key, int): raise Exception("Key must be integer ")

        return key % self.size
    

    def init_array(self, size):
        return [None for _ in range(size)]
    
hashTable = HashTable(13)
hashTable.put(7, "hi");
hashTable.put(20, "hello");
hashTable.put(33, "sunny");
hashTable.put(46, "weather");
hashTable.put(59, "wow");
hashTable.put(72, "fourty");
hashTable.put(85, "happy");
hashTable.put(98, "sad");

print(hashTable.keys)