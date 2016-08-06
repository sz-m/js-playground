function GetAllBooks() {
	let books = [
		{id: 1, title: 'Pinokio', author: 'Carlo Collodi', avaible: true, category: Category.Children},
		{id: 2, title: 'Akademia pana Kleksa', author: 'Jan Brzechwa', avaible: true, category: Category.Children},
		{id: 3, title: 'Muminki atakuja', author: 'Autor nieznany', avaible: false, category: Category.Fiction},
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

function GetBookTitlesByCategory(categoryFilter: Category) : Array<string> {
	console.log('Getting book in category:', categoryFilter, Category[categoryFilter]);

	const allBooks = GetAllBooks();
	const titles: string[] = [];

	for(let book of allBooks) {
		if(book.category == categoryFilter)
			titles.push(book.title);
	}

	return titles;
}

function LogBookTitles(titles: Array<string>) : void {
	for(let title of titles) {
		console.log(title);
	}
}

function GetBookByID(id: number) {
	const allBooks = GetAllBooks();
	return allBooks.filter(book => book.id === id)[0];
}

const childrenBooks = GetBookTitlesByCategory(Category.Children);
// LogBookTitles(childrenBooks);
childrenBooks.forEach((val, idx, array) => console.log(++idx + ' - ' + val));
console.log('GetBookByID(1).title: ' + GetBookByID(1).title)