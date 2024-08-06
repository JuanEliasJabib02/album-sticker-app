// types.ts

export type Sticker = {
	id: number;
	name: string;
	category: 'Special' | 'Regular';
};

export type AlbumSection = {
	[id: number]: Sticker | null;
};

export type Album = {
	movies: AlbumSection;
	characters: AlbumSection;
	ships: AlbumSection;
};
