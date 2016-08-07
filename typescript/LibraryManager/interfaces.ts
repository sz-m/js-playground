import {Category} from './enums';

interface Book {
	id: number;
	title: string;
	author: string;
	avaible: boolean;
	category: Category;
}

export {Book};