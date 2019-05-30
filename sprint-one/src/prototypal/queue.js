var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.nextIndex = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this[this.nextIndex] = value;
	this.nextIndex++;
};

queueMethods.dequeue = function() {
	if(this.nextIndex === 0) {
		return;
	}
	this.nextIndex--;
	var toReturn = this[0];
	var copyQueue = {};
	//copy current data into copyQueue
	for(var key in this) {
		copyQueue[key] = this[key];
	}
	//shift newQueue using copyQueue as template
	for(var i = 0; i < this.nextIndex; i++) {
		this[i] = copyQueue[i + 1];
	}
	delete this[this.nextIndex];
	return toReturn;

};

queueMethods.size = function() {
	return this.nextIndex;
}

