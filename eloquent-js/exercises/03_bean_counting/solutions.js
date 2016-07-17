function countBs(word) {
	return countChar(word, 'B');
}

function countChar(word, char) {
	var counter = 0;
	for(var j=0; j<word.length; ++j)
		if(word[j] === char) counter++;

	return counter;	
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));