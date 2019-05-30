class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.nextIndex = 0;
  }

  push(value) {
  	this[this.nextIndex] = value;
  	this.nextIndex++;
  }

  pop() {
  	if(this.nextIndex === 0) {
  		return;
  	}
  	this.nextIndex--;
  	var toReturn = this[this.nextIndex];
  	delete this[this.nextIndex];
  	return toReturn;
  }

  size() {
  	return this.nextIndex;
  }

}

var stack = new Stack();