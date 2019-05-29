var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var nextIndex = 0;

  someInstance.enqueue = function(value) {
    //adds data
    storage[nextIndex] = value;
    nextIndex++;
  };

  someInstance.dequeue = function() {
    //removes data
    //shift values down the keys (keys/indices stay same), delete last property
    var storageCopy = {};
    for(var i in storage) {
      storageCopy[i] = storage[i];
    }
    var valToReturn = storage[0];
    for(var i = 0; i < nextIndex - 1; i++) {
      storage[i] = storageCopy[i + 1];
    }
    delete storage[nextIndex];
    if(nextIndex === 0) {
      nextIndex = 0;      
    } else {
      nextIndex--;
    }
    return valToReturn;

  };

  someInstance.size = function() {
    return nextIndex;
  };

  return someInstance;
};
