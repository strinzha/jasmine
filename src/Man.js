var Man = function (name, age) {
	this.name = name;
	this.age = age;	
	return this;	
}

Man.prototype.live = function() {
	console.log('Live!!');
}