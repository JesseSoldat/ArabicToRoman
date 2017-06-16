function ArabicToRoman(num) {
	if(isNotNumber(num)) {
		return 'Error value must be a positive number';
	}
	return findRoman(createNumArray(num));
}

function isNotNumber(num) {
	return( (isNaN(num) === true) || (typeof(num) !== 'number') || (num < 0) );
}

function createNumArray(num) {
	return String(num).split('');
}

function findRoman(numArray) {
	let romanNumbers = {"M":1000, "CM": 900, "D": 500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX": 9,  "V": 5, "IV": 4, "I": 1};
	let onesColumn = numArray.pop();
	let tensColumn = numArray.pop();
	let hundredsColumn = numArray.pop();
	let thousandsColumn = numArray.pop();

	if(onesColumn != undefined) {	
		onesColumn = colToRoman(parseInt(onesColumn), romanNumbers, 1, 'I');		
	}

	if(tensColumn != undefined) {
		tensColumn = colToRoman(parseInt(tensColumn + "0"), romanNumbers, 10, 'X');		
	}	
	
	if(hundredsColumn != undefined) {
		hundredsColumn = colToRoman(parseInt(hundredsColumn + "00"), romanNumbers, 100, 'C');
	}

	if(thousandsColumn != undefined) {
		thousandsColumn = colToRoman(parseInt(thousandsColumn + '000'), romanNumbers, 1000, 'M');
	}

	return createRoman([thousandsColumn, hundredsColumn, tensColumn, onesColumn]);
}

function colToRoman(num, romanNumbers, arabicNum, romanNum) {
	for(prop in romanNumbers) {
		if(isEqual(num, romanNumbers, prop)) {
			return prop
		}
		if(num > romanNumbers[prop]) {
			let diff = num - romanNumbers[prop];	
			return addNum(diff, prop, arabicNum, romanNum);
		}
	}
}

function isEqual(num, romanNumbers, prop) {
	if(num === romanNumbers[prop]) {
		return prop;
	}	
}

function addNum(diff, prop, num, addNum) {
	for(let i = num; diff >= i; i += num) {
		prop += addNum;
	}
	return prop;		
}

function createRoman(columnsArray) {
	let romanArray = columnsArray.filter((col) => {
		return col != undefined;
	});
	return romanArray.join('');
}



