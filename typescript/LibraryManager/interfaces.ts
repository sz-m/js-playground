import {Category} from './enums';

interface Book {
	id: number;
	title: string;
	author: string;
	avaible: boolean;
	category: Category;
	markDamaged?: DamageLogger;
}

interface DamageLogger {
	(reason: string): void;
}

export {Book};