import { Character, Film, Starship } from '../services/starwar-api-interfaces';

export interface Sticker {
	id: number;
	name: string;
	category: 'Special' | 'Regular';
}

export interface Album {
	movies: Record<number, Film | null>;
	characters: Record<number, Character | null>;
	ships: Record<number, Starship | null>;
}

export const initialAlbumState: Album = {
	movies: {},
	characters: {},
	ships: {},
};

export interface Pack {
	id: number;
	state: 'available' | 'locked' | 'opened';
	timer: number;
}

export interface PackConfig {
	movies: number;
	characters: number;
	starships: number;
}
