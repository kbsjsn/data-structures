var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.nextIndex = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this[this.nextIndex] = value;
	this.nextIndex++;
};

stackMethods.pop = function() {	
	if(this.nextIndex === 0) {
		return;
	}
	this.nextIndex--;
	var lastIndex = this[this.nextIndex];
	delete this[this.nextIndex];
	return lastIndex;
};

stackMethods.size = function() {
	return this.nextIndex;
}
