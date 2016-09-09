"use strict";
var enums_1 = require('./enums');
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Pinokio', author: 'Carlo Collodi', avaible: true, category: enums_1.Category.Children },
        { id: 2, title: 'Akademia pana Kleksa', author: 'Jan Brzechwa', avaible: true, category: enums_1.Category.Children },
        { id: 3, title: 'Muminki atakuja', author: 'Autor nieznany', avaible: false, category: enums_1.Category.Fiction },
    ];
    return books;
}
function LogFirstAvaible(books) {
    var numberOfBooks = books.length;
    var firstAvaible = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.avaible) {
            firstAvaible = currentBook.title;
            break;
        }
    }
    console.log('Total books:', numberOfBooks);
    firstAvaible ?
        console.log('First avaible:', firstAvaible) :
        console.log('No books avaible.');
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting book in category:', categoryFilter, enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var titles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book = allBooks_1[_i];
        if (book.category == categoryFilter)
            titles.push(book.title);
    }
    return titles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + ' ' + id;
}
function CreateCustomer(name, age, city) {
    console.log('Name: ' + name);
    if (age)
        console.log('Age: ' + age);
    if (city)
        console.log('City: ' + city);
}
function CheckoutBooks(name) {
    var booksID = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        booksID[_i - 1] = arguments[_i];
    }
    console.log("Checking books for " + name);
    var avaibleTitles = [];
    for (var _a = 0, booksID_1 = booksID; _a < booksID_1.length; _a++) {
        var id = booksID_1[_a];
        var book = GetBookByID(id);
        if (book.avaible)
            avaibleTitles.push(book.title);
    }
    return avaibleTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
// duck typing
var myBook = {
    id: 101,
    title: '101 dalmatenczykow',
    author: 'Diego',
    category: enums_1.Category.Children,
    avaible: true,
    year: 1998,
    copies: 2,
};
PrintBook(myBook);
// function types
var IdGenerator;
IdGenerator = CreateCustomerID;
console.log('IdGenerator: ', IdGenerator('michal', 404));
// optional parameter
CreateCustomer("Michal", 10);
// rest parameters
var myBooks = CheckoutBooks('Morfik', 1, 2);
myBooks.forEach(function (title) { return console.log(title); });
var childrenBooks = GetBookTitlesByCategory(enums_1.Category.Children);
// LogBookTitles(childrenBooks);
childrenBooks.forEach(function (val, idx, array) { return console.log(++idx + ' - ' + val); });
console.log('GetBookByID(1).title: ' + GetBookByID(1).title);
console.log('Fiction books:');
var fictionBooks = GetBookTitlesByCategory();
fictionBooks.forEach(function (title) { return console.log(title); });
