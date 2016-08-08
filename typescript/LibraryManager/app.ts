import {Category} from './enums';
import {Book} from './interfaces';

function GetAllBooks(): Book[]  {
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

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction) : Array<string> {
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

function GetBookByID(id: number): Book {
	const allBooks = GetAllBooks();
	return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
	return name + ' ' + id;
}

function CreateCustomer(name: string, age?: number, city?: string) {
	console.log('Name: ' + name);
	if(age) console.log('Age: ' + age);
	if(city) console.log('City: ' + city);
}

function CheckoutBooks(name: string, ...booksID: Array<number>): Array<string> {
	console.log("Checking books for " + name);

	let avaibleTitles: Array<string> = [];

	for(let id of booksID) {
		let book = GetBookByID(id);
		
		if(book.avaible)
			avaibleTitles.push(book.title);
	}

	return avaibleTitles;
}

function PrintBook(book: Book): void {
	console.log(book.title + ' by ' + book.author);
}

// duck typing
let myBook = {
	id: 101,
	title: '101 dalmatenczykow',
	author: 'Diego',
	category: Category.Children,
	avaible: true,
	year: 1998,
	copies: 2,
};
PrintBook(myBook);

// function types
let IdGenerator: (chars: string, num: number) => string;
IdGenerator = CreateCustomerID;

console.log('IdGenerator: ', IdGenerator('michal', 404));


// optional parameter
CreateCustomer("Michal", 10);

// rest parameters
let myBooks: Array<string> = CheckoutBooks('Morfik', 1, 2);
myBooks.forEach(title => console.log(title));


const childrenBooks = GetBookTitlesByCategory(Category.Children);
// LogBookTitles(childrenBooks);
childrenBooks.forEach((val, idx, array) => console.log(++idx + ' - ' + val));
console.log('GetBookByID(1).title: ' + GetBookByID(1).title);


console.log('Fiction books:');
const fictionBooks = GetBookTitlesByCategory();
fictionBooks.forEach(title => console.log(title));