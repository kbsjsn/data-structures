var BinarySearchTree = function(value) {
	// this.container = {};
	this.right;
	this.left;
	this.value = value;
};

BinarySearchTree.prototype.insert = function(newVal) {
	if(newVal > this.value) {
		if(this.right === undefined) {
			this.right = new BinarySearchTree(newVal);	
		} else {
			this.right.insert(newVal);
		}
	} else {
		if(this.left === undefined) {
			this.left = new BinarySearchTree(newVal);
		} else {
			this.left.insert(newVal);
		}
	}
};

BinarySearchTree.prototype.contains = function(testVal) {
	if(testVal === this.value) {
		return true;
	}
	if(this.right !== undefined && testVal >= this.right.value && this.right.contains(testVal)) {
		return true;
	}
	if(this.left !== undefined && testVal <= this.left.value && this.left.contains(testVal)) {
		return true;
	}
	return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cbf) {
	cbf(this.value);

	if(this.left !== undefined) {
		this.left.depthFirstLog(cbf);
	}
	if(this.right !== undefined) {
		this.right.depthFirstLog(cbf);
	}

	
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
