var size=5;

var char=' ';
var line='';

for(var h=0; h<size; ++h) {
	for(var w=0; w<size; ++w) {
		line += char; 
		char = (char == ' ') ? '#' : ' ';
	}
	console.log(line);
	line = '';
	if(size%2 == 0)
		char = (char == ' ') ? '#' : ' ';
}