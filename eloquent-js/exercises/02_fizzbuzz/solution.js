var out = '';
for(var j=1; j<=100; ++j) {
	if(j%3 == 0) out+= 'Fizz';
	if(!(j%5)) out += 'Buzz';

	if(out !== '') {
		console.log(out, j);
		out = ''; 
	}
}