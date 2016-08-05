function GetAllBooks() {
	let books = [
		{title: 'Pinokio', author: 'Carlo Collodi', avaible: true, category: Category.Children},
		{title: 'Akademia pana Kleksa', author: 'Jan Brzechwa', avaible: true, category: Category.Children},
		{title: 'Muminki atakuja', author: 'Autor nieznany', avaible: false, category: Category.Fiction},
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

enum Category {Biography, Fiction, Children, Poetry, History};

const allBooks = GetAllBooks();
const firstAvaible = LogFirstAvaible(allBooks);