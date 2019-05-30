class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.nextIndex = 0;
  }

  enqueue(value) {
  	this[this.nextIndex] = value;
  	this.nextIndex++;
  }

  dequeue() {
  	if(this.nextIndex === 0) {
  		return;
  	}
  	this.nextIndex--;
  	var toReturn = this[0];
  	var copyQueue = {};
  	for(var key in this) {
  		copyQueue[key] = this[key];
  	}
  	for(var i = 0; i < this.nextIndex; i++) {
  		this[i] = copyQueue[i + 1];
  	}
  	delete this[this.nextIndex];
  	return toReturn;
  } 

  size() {
  	return this.nextIndex;
  }

}

var queue = new Queue();