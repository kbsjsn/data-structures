var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.nextIndex = 0;

  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from) {
	for(var key in from) {
		to[key] = from[key];
	}
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage.nextIndex = value;
	this.nextIndex += 1;
};

queueMethods.dequeue = function() {
	if(this.nextIndex === 0) {
		this.nextIndex = 0;
	}
	var firstIndex = this.storage[0];
	var copyQueue = {};
	extend(copyQueue, this.storage);
	for(var i = 0; i < this.nextIndex - 1; i++) {
		this.storage[i] = copyQueue[i + 1];
	}
	delete this.storage[nextIndex - 1];
	return firstIndex;

}

queueMethods.size = function() {
	return this.nextIndex;
}

