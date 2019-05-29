var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  

  someInstance.push = function(value) {
    var entriesArr = Object.entries(storage); //[[key, value]]
    var index = entriesArr.length;
    /*
    if(entriesArr.length === 0) {
      index = 0;
    } else {
      index = entriesArr.length;  //last index
    }
    */
    storage[index] = value;
  };

  someInstance.pop = function() {
    var entriesArr = Object.entries(storage);
    var lastVal = Object.values(storage)[entriesArr.length - 1];
    delete storage[entriesArr.length - 1];
    return lastVal;
  };

  someInstance.size = function() {
    return Object.entries(storage).length;
  };

  return someInstance;
};
