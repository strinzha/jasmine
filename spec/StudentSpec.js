describe('Student', function() {

	var student = new Student();

	beforeEach(function() {		
		student.name = 'Ivan';
		student.age = 25;
	});

	it('should have a name property', function() {
		expect(student.hasOwnProperty('name')).toBeTruthy();
	});

	it('should have a study method', function() {
		expect(typeof student.study).toEqual('function');
	});

	it('Student\'s name should be Ivan', function() {
		expect(student.name).toEqual('Ivan');
	});
	
});