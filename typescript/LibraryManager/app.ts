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

const childrenBooks = GetBookTitlesByCategory(Category.Children);
LogBookTitles(childrenBooks);