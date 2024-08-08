import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Album, Sticker } from '../../types/types';
import { createInitialAlbum } from '../../lib/utils';

interface AlbumState {
	album: Album;
	isInitialized: boolean;
	initializeAlbum: () => void;
	addStickerToAlbum: (section: keyof Album, sticker: Sticker) => void;
	removeStickerFromAlbum: (section: keyof Album, stickerId: number) => void;
}

const albumSlice: StateCreator<
	AlbumState,
	[['zustand/persist', unknown]]
> = set => ({
	album: createInitialAlbum(),
	isInitialized: false,
	initializeAlbum: () =>
		set(state => {
			if (!state.isInitialized) {
				return {
					album: createInitialAlbum(),
					isInitialized: true,
				};
			}
			return state;
		}),
	addStickerToAlbum: (section, sticker) => {
		set(state => ({
			album: {
				...state.album,
				[section]: {
					...state.album[section],
					[sticker.id]: sticker,
				},
			},
		}));
	},
	removeStickerFromAlbum: (section, stickerId) => {
		set(state => ({
			album: {
				...state.album,
				[section]: {
					...state.album[section],
					[stickerId]: null,
				},
			},
		}));
	},
});

export const useAlbumStore = create<AlbumState>()(
	persist(albumSlice, {
		name: 'album-storage',
		storage: createJSONStorage(() => localStorage),
	})
);
