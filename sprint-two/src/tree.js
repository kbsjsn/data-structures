var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me; an array containing subtrees
  for(var key in treeMethods) {
  	newTree[key] = treeMethods[key];
  }

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
	if(this.value === target) {
		return true;
	}
	for(var i = 0; i < this.children.length; i++) {
		if(this.children[i].contains(target)) {
			return true;
		}
	}
	
	return false;
	// var containsTarget = false;
	// var recursiveFun = function(a){
	// 	if(this.value === a) {
	// 		containsTarget = true;
	// 	}
	// 	else if(this.children.length > 0) {
	// 		for(var child of this.children) {
	// 			child.recursiveFun(a);
	// 		}
	// 	}
	// }
	// recursiveFun(target);
	// return containsTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild -- constant O(1), contains -- quadratic
 */
