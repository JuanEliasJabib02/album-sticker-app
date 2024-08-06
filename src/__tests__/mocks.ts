import { Sticker } from '../types/types';

export function sum(a: number, b: number) {
	return a + b;
}

export const mockMovies: Sticker[] = Array.from({ length: 6 }, (_, index) => ({
	id: index + 1,
	name: `Movie ${index + 1}`,
	category: index < 6 ? 'Special' : 'Regular',
}));

export const mockCharacters: Sticker[] = Array.from(
	{ length: 82 },
	(_, index) => ({
		id: index + 1,
		name: `Character ${index + 1}`,
		category: index < 20 ? 'Special' : 'Regular',
	})
);

export const mockShips: Sticker[] = Array.from({ length: 36 }, (_, index) => ({
	id: index + 1,
	name: `Ship ${index + 1}`,
	category: index < 10 ? 'Special' : 'Regular',
}));
