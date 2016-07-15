'use strict';

var cat = {
	name: 'Fluffy',
	color: 'White',
	speak: function() { display('Meeeeoow'); },
};

cat.eyes = 'green';

display('Fluffy is '+cat.color+' cat.');
display(cat.speak());

display('More info about ' + cat.name +':');
display(cat);