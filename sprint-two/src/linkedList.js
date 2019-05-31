var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.head === null) {
      // list.head = Node(value); WRONG => creates 2 obj's
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var newTail = Node(value)
      list.tail.next = newTail;            
      //find tail and point its next to incoming value
      list.tail = newTail;            
    }
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var oldHead = list.head;
    list.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    if(list.head.value === target) {
      return true;
    }
    var currentNode = list.head.next;
    while (currentNode) {   //same as currentNode !== node
      if(currentNode.value === target) {
        return true;
        // break;
      }
      currentNode = currentNode.next;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
