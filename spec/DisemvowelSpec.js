


describe("Disemvoweler", function() {
	it("should remove all lowercase vowels", function() {
		expect(disemvowel("Hello world")).toEqual("Hll wld");
	});

	it("should remove all upercase vowels", function() {
		expect(disemvowel("Artistic Eagle")).toEqual("rtstc gl");
	});
	
	it("shouldn't change empty strings", function() {
		expect(disemvowel("")).toEqual("");
	}); 

	it("shouldn't change strings with no vowels", function() {
		expect(disemvowel("Mhmm")).toEqual("Mhmm"); 
	});


});
