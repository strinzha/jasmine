describe('Man', function() {

	var man = new Man();

	beforeEach(function() {		
		man.name = 'Vasya';
		man.age = 29;
	});

	it('should have a name property', function() {
		expect(man.hasOwnProperty('name')).toBeTruthy();
	});

	it('should have a live method', function() {
		expect(typeof man.live).toEqual('function');
	});

	it('Vasya should be 29', function() {
		expect(man.age).toEqual(29);
	});
});