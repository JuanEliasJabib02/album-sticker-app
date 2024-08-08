export interface Sticker {
	id: number;
	name: string;
	category: 'Special' | 'Regular';
}

export interface Album {
	movies: Record<number, Sticker | null>;
	characters: Record<number, Sticker | null>;
	ships: Record<number, Sticker | null>;
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
