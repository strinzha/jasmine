var Student = function(name, age) {
	Man.apply(this, arguments);		
	return this;
};

Student.prototype = Object.create(Man.prototype);

Student.prototype.study = function() {
	console.log('Study!!');
}