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
