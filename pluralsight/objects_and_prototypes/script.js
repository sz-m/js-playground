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

// ------------------------------------------

var ponny = 
Object.create(Object.prototype,
	{
		name: {
			value: 'Ponny',
			enumerable: true,
			writable: true,
			configurable: true,
		},
		color: {
			value: 'Brown',
			enumerable: true,
			writable: true,
			configurable: true,
		},
	})

display(ponny.name+' is '+ponny.color+' hamster.');

display('More info about '+ponny.name);
display(ponny);

// ------------------------------------------
// es6

class Bird {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	speak() {
		display('pi pi?');
	}
}

var red = new Bird('Red', 'Red');

display(red.name+' is '+red.color+' bird.');
red.speak();

display('More info about '+red.name);
display(red);

// ------------------------------------------

red['size'] = 'small';
display('getOwnPropertyDescriptor(red, size)');
display(Object.getOwnPropertyDescriptor(red, 'size'));

Object.defineProperty(red, 'size', {writable: false});

// Uncaught TypeError: Cannot assign to read only property 'size' of object '#<Bird>'
// red['size'] = 'xxl';

// but this one is ok.
red['size.x'] = 'aaa';
display('getOwnPropertyDescriptor(red, size.x)');
display(Object.getOwnPropertyDescriptor(red, 'size.x'));

// and now it's not ok
Object.freeze(red.size);
red['size.x'] = 'yyy';
display('getOwnPropertyDescriptor(red, size.x)');
display(Object.getOwnPropertyDescriptor(red, 'size.x'));

display('getOwnPropertyDescriptor(red, size)');
display(Object.getOwnPropertyDescriptor(red, 'size'));