/*
    * Difference between HashMap an Hash Table
        - Both Hash Tables and Hashmap provide a key/value functionality but there is a slight difference.
        - Hashmap offers the ability of the keys to be of any data type, unlike Hash Tables where the keys can only be integers and strings.
*/

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', null);
map1.set('c', [2,3,3,4]);



map1