var LinkedList = function() {
  var list = {};
  list.head = Node();
  list.tail = Node();

  list.addToTail = function(value) {
    if(Object.values(this).length === 0) {
      this.head.value = value;
    } else {
      this.tail.next = value; //pair old tail's next to incoming value
      
      this.value = Node(value);
    }
  };

  list.removeHead = function() {
    var newHead = this.head.next;
    delete this.head;
    this.head = newHead;
    return newHead;
  };

  list.contains = function(target) {
    return this.value !== undefined || this.head.value !== undefined || this.tail.value !== undefined;

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
