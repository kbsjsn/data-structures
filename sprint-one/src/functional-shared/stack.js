var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  // newStack.storage = {};
  newStack.nextIndex = 0;
  extend(newStack, stackMethods);


  return newStack;
};

var extend = function(to, from) {
	for(var key in from) {
		to[key] = from[key]; 
	}
};

stackMethods = {};

//stackMethods.nextIndex = 0;

stackMethods.push = function(value) {		
	this[this.nextIndex] = value;
	this.nextIndex += 1;
};

stackMethods.pop = function() {	
	if(this.nextIndex === 0) {
		this.nextIndex = 0;
		return this[this.nextIndex];
	}
	this.nextIndex -= 1;
	var toReturn = this[this.nextIndex];
	delete this[this.nextIndex];
	return toReturn;	
};

stackMethods.size = function() {
	return this.nextIndex;
};


