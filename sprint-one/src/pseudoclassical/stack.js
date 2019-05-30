var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.nextIndex = 0;
};

Stack.prototype.push = function(value) {
	this[this.nextIndex] = value;
	this.nextIndex++;
};

Stack.prototype.pop = function() {
	if(this.nextIndex === 0) {
		return;
	}
	this.nextIndex--;
	var toReturn = this[this.nextIndex];
	delete this[this.nextIndex];
	return toReturn;
};

Stack.prototype.size = function() {
	return this.nextIndex;
}

var stack = new Stack();
