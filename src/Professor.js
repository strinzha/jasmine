var Professor = function(name, age, experience) {
	this.name = name;
	this.age = age;
	this.experience = experience;
	return this;
}

Professor.prototype.teach = function() {
	return 'I can teach!'
}
Professor.prototype.startToTeachAge = function(argument) {
	if (argument === undefined) {
        throw new Error("argument is undefined");
    } else if (typeof argument !== 'number') {
        throw new Error("argument should be a number");
    } else {
        return this.age - this.experience - argument;
    }
	
}