describe("ArabicToRoman", () => {

	it("should throw an error if user enters a string", () => {
		expect(ArabicToRoman('3')).toEqual('Error value must be a positive number');
	});
  
	it("should throw an error if user enters a negative number", () => {
		expect(ArabicToRoman(-3)).toEqual('Error value must be a positive number');
	});
 
	it("should throw an error if the user enters an empty string", () => {
		expect(ArabicToRoman('')).toEqual('Error value must be a positive number');
	});

	it("should throw an error if the user enters NaN", () => {
		expect(ArabicToRoman(NaN)).toEqual('Error value must be a positive number');
	});

	it("should throw an error if the user enters undefined", () => {
		expect(ArabicToRoman(undefined)).toEqual('Error value must be a positive number');
	});

	it("should return I when given 1", () => {
		expect(ArabicToRoman(1)).toEqual('I');
	});

	it("should return II when given 2", () => {
		expect(ArabicToRoman(2)).toEqual('II');
	});

	it("should return III when given 3", () => {
		expect(ArabicToRoman(3)).toEqual('III');
	});

	it("should return IV when given 4", () => {
		expect(ArabicToRoman(4)).toEqual('IV');
	});

	it("should return V when given 5", () => {
		expect(ArabicToRoman(5)).toEqual('V');
	});

	it("should return VI when given 6", () => {
		expect(ArabicToRoman(6)).toEqual('VI');
	});

	it("should return VII when given 7", () => {
		expect(ArabicToRoman(7)).toEqual('VII');
	});
	
	it("should return VIII when given 8", () => {
		expect(ArabicToRoman(8)).toEqual('VIII');
	});

	it("should return IX when given 9", () => {
		expect(ArabicToRoman(9)).toEqual('IX');
	});

	it("should return X when given 10", () => {
		expect(ArabicToRoman(10)).toEqual('X');
	});

	it("should return XI when given 11", () => {
		expect(ArabicToRoman(11)).toEqual('XI');
	});

	it("should return XIV when given 14", () => {
		expect(ArabicToRoman(14)).toEqual('XIV');
	});

	it("should return XV when given 15", () => {
		expect(ArabicToRoman(15)).toEqual('XV');
	});

	it("should return XVII when given 17", () => {
		expect(ArabicToRoman(17)).toEqual('XVII');
	});

	it("should return XX when given 20", () => {
		expect(ArabicToRoman(20)).toEqual('XX');
	});

	it("should return XXIII when given 23", () => {
		expect(ArabicToRoman(23)).toEqual('XXIII');
	});

	it("should return XXV when given 25", () => {
		expect(ArabicToRoman(25)).toEqual('XXV');
	});

	it("should return XXX when given 30", () => {
		expect(ArabicToRoman(30)).toEqual('XXX');
	});

	it("should return XL when given 40", () => {
		expect(ArabicToRoman(40)).toEqual('XL');
	});

	it("should return XLIV when given 44", () => {
		expect(ArabicToRoman(44)).toEqual('XLIV');
	});

	it("should return L when given 50", () => {
		expect(ArabicToRoman(50)).toEqual('L');
	});

	it("should return LIII when given 53", () => {
		expect(ArabicToRoman(53)).toEqual('LIII');
	});

	it("should return LX when given 60", () => {
		expect(ArabicToRoman(60)).toEqual('LX');
	});

	it("should return LXX when given 70", () => {
		expect(ArabicToRoman(70)).toEqual('LXX');
	});

	it("should return LXXX when given 80", () => {
		expect(ArabicToRoman(80)).toEqual('LXXX');
	});

	it("should return XC when given 90", () => {
		expect(ArabicToRoman(90)).toEqual('XC');
	});

	it("should return XCIV when given 94", () => {
		expect(ArabicToRoman(94)).toEqual('XCIV');
	});

	it("should return C when given 100", () => {
		expect(ArabicToRoman(100)).toEqual('C');
	});

	it("should return CXIV when given 114", () => {
		expect(ArabicToRoman(114)).toEqual('CXIV');
	});

	it("should return CXLIX when given 149", () => {
		expect(ArabicToRoman(149)).toEqual('CXLIX');
	});

	it("should return CXCIX when given 199", () => {
		expect(ArabicToRoman(199)).toEqual('CXCIX');
	});

	it("should return CC when given 200", () => {
		expect(ArabicToRoman(200)).toEqual('CC');
	});

	it("should return CCCLIII when given 353", () => {
		expect(ArabicToRoman(353)).toEqual('CCCLIII');
	});

	it("should return CDXXIII when given 423", () => {
		expect(ArabicToRoman(423)).toEqual('CDXXIII');
	});

	it("should return DLXI when given 561", () => {
		expect(ArabicToRoman(561)).toEqual('DLXI');
	});

	it("should return DCCVII when given 707", () => {
		expect(ArabicToRoman(707)).toEqual('DCCVII');
	});

	it("should return DCCCXCIX when given 899", () => {
		expect(ArabicToRoman(899)).toEqual('DCCCXCIX');
	});

	it("should return CMXCIX when given 999", () => {
		expect(ArabicToRoman(999)).toEqual('CMXCIX');
	});

	it("should return M when given 1000", () => {
		expect(ArabicToRoman(1000)).toEqual('M');
	});

	it("should return MMDCCXXXIII when given 2733", () => {
		expect(ArabicToRoman(2733)).toEqual('MMDCCXXXIII');
	});
	
	it("should return MMMCMXCIX when given 3999", () => {
		expect(ArabicToRoman(3999)).toEqual('MMMCMXCIX');
	});
});