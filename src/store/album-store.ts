import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Album } from '../types/types';
import { createInitialAlbum } from '../lib/utils';

interface AlbumState {
	album: Album;
	isInitialized: boolean;
	initializeAlbum: () => void;
}

const albumSlice: StateCreator<
	AlbumState,
	[['zustand/persist', unknown]]
> = set => ({
	/* Type solution that i found on stack overflow
	https://stackoverflow.com/questions/76744178/typescript-error-with-zustands-persist-middleware-and-statecreator-in-react-app*/
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
});

export const useAlbumStore = create<AlbumState>()(
	persist(albumSlice, {
		name: 'album-storage',
		storage: createJSONStorage(() => localStorage),
	})
);
