'use strict';

var cat = {
	name: 'Fluffy',
	color: 'White',
	speak: function() { display('Meeeeoow'); },
};

cat.eyes = 'green';

display(cat.name+' is '+cat.color+' cat.');
display(cat.speak());

display('More info about ' + cat.name +':');
display(cat);

// ------------------------------------------

function Dog(name, color) {
	this.name = name;
	this.color = color;
	this.speak = function() { display('Woaf, woaf!'); }
}

var rex = new Dog('Rex', 'Black');

display(rex.name+' is '+rex.color+' dog.');
display(rex.speak());

display('More info about '+rex.name);
display(rex);