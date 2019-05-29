var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //adds data
    var entriesArr = Object.entries(storage);
    var index = entriesArr.length;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    //removes data
    //shift values down the keys (keys/indices stay same), delete last property
    var entriesArr = Object.entries(storage);
    var valToReturn = entriesArr[0][1];
    var lastVal = entriesArr[entriesArr.length - 1][1];
    for(var [key,value] of entriesArr) {
      storage.key = 
    }

  };

  someInstance.size = function() {
    return Object.entries(storage).length;
  };

  return someInstance;
};
