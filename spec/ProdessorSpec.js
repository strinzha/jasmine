describe('Professor', function() {

	var professor = new Professor();

	beforeEach(function() {		
		professor.name = 'Ivan';
		professor.age = 55;
		professor.experience = 20;
	});

	it('should have an age property', function() {
		expect(professor.hasOwnProperty('age')).toBeTruthy();
	});

	it('should have a teach method', function() {
		expect(typeof professor.teach).toEqual('function');
	});

	it('Professor should be 55', function() {
		expect(professor.age).toEqual(55);
	});

	it('Professor\'s start to teach age should be 31', function() {
		expect(professor.startToTeachAge(4)).toEqual(31);
	});

	it('should throw an exception when startToTeachAge() called with NaN or undefined arguments', function() {
        expect( function(){
         professor.startToTeachAge('df');
          }).toThrow();            
    });
});