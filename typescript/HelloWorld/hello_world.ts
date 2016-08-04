class HelloWorld {
	constructor(public message: string) {
		console.log('Hello', message);
	}
}

var hello = new HelloWorld('TypeScript');

console.log(hello);