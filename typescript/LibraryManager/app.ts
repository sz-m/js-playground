function GetAllBooks() {
	let books = [
		{title: 'Pinokio', author: 'Carlo Collodi', avaible: true},
		{title: 'Akademia pana Kleksa', author: 'Jan Brzechwa', avaible: true},
		{title: 'Muminki atakuja', author: 'Autor nieznany', avaible: false},
	];

	return books;
}

function LogFirstAvaible(books) : void {
	let numberOfBooks: number = books.length;
	let firstAvaible: string = '';

	for(let currentBook of books) {
		if(currentBook.avaible) {
			firstAvaible = currentBook.title;
			break;
		}
	}

	console.log('Total books:', numberOfBooks);

	firstAvaible ? 
		console.log('First avaible:', firstAvaible) :
		console.log('No books avaible.');
}

const allBooks = GetAllBooks();
const firstAvaible = LogFirstAvaible(allBooks);