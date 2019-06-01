

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {		//add key-value tuples as element of an array (bucket). this bucket will also be the element of the storage array
  var index = getIndexBelowMaxForKey(k, this._limit);

  // if(this._storage.get(index) !== undefined) {
  // 	for(var tuple of this._storage.get(index)) {
  // 		if(tuple[0] === k) {
  // 			tuple[1] = v;
  // 		}
  // 	}
  // } else if(this._storage.get(index) === undefined) {
  // 	this._storage.set(index, [[k, v]]);	
  // } else {
  // 	this._storage.set(index, this._storage.get(index).push([k, v]))
  // }

	if(this._storage.get(index) === undefined) {
  	this._storage.set(index, [[k, v]]);	
  } else {
  	var newK = true;
  	for(var tuple of this._storage.get(index)) {
  		if(tuple[0] === k) {
  			tuple[1] = v;
  			newK = false;
  		}
  	}
    if(newK) {
    	this._storage.get(index).push([k, v]);
    	this._storage.set(index, this._storage.get(index));
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var target = this._storage.get(index);
  for(var i = 0; i < target.length; i++) {
  	if(target[i][0] === k) {
  		return target[i][1];
  	}
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this.insert(k, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


