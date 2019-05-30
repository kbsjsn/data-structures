var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.nextIndex = 0;
};

Queue.prototype.enqueue = function(value) {
	this[this.nextIndex] = value;
	this.nextIndex++;
};

Queue.prototype.dequeue = function() {
	if(this.nextIndex === 0) {
		return;
	}
	this.nextIndex--;
	var toReturn = this[0];
	//copy orig queue into copyQueue to use as template to modify orig queue
	var copyQueue = {};
	for(var key in this) {
		copyQueue[key] = this[key];
	}
	for(var i = 0; i < this.nextIndex; i++) {
		this[i] = copyQueue[i + 1];
	}
	delete this[this.nextIndex];
	return toReturn;
};

Queue.prototype.size = function() {
	return this.nextIndex;
};

var queue = new Queue();