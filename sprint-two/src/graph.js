

// Instantiate a new graph
var Graph = function() {
	this.container = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.container[node] = {'node': node, 'edge': []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	var arrNodes = Object.keys(this.container);
	for(var i = 0; i < arrNodes.length; i++) {
		if(arrNodes[i] == node) {
			return true;
		}
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.container[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

	if(this.container[fromNode] === undefined) {
		return false;
	}
	if(this.container[toNode] === undefined) {
		return false;
	}
	var fromEdge = this.container[fromNode].edge;
	var toEdge = this.container[toNode].edge;

	if(fromEdge.indexOf(toNode) > -1 && toEdge.indexOf(fromNode) > -1) { 
		return true;
	}

	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	// var from = this[fromNode];
	// var toward = this[toNode];
	this.container[fromNode].edge.push(Number(toNode));
	this.container[toNode].edge.push(Number(fromNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var newFromArr = [];
	var newToArr = [];

	for(var i = 0; i < this.container[fromNode].edge.length; i++) {
		if(this.container[fromNode].edge[i] != toNode) {
			newFromArr.push(this.container[fromNode].edge[i]);
		}
	}
	this.container[fromNode].edge = newFromArr;
	for(var i = 0; i < this.container[toNode].edge.length; i++) {
		if(this.container[toNode].edge[i] != fromNode) {
			newToArr.push(this.container[toNode].edge[i]);
		}
	}
	this.container[toNode].edge = newToArr;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

	for(var key in this.container) {  //i is individual node value
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


