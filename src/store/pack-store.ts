import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Pack } from '../types/types';
import {
	createInitialPacks,
	lockPack,
	updatePackState,
} from '../lib/helpers/pack-helpers';

interface PackState {
	packs: Pack[];
	initializePacks: () => void;
	openPack: (packId: number) => void;
	updatePackState: (
		packId: number,
		newState: 'available' | 'locked',
		timer: number
	) => void;
}

const packSlice: StateCreator<
	PackState,
	[['zustand/persist', unknown]]
> = set => ({
	packs: createInitialPacks(),
	initializePacks: () => set({ packs: createInitialPacks() }),
	openPack: (packId: number) => {
		set(state => {
			const pack = state.packs.find(p => p.id === packId);
			if (pack && pack.state === 'available') {
				// Mock function for getting stickers
				console.log(`Getting stickers for pack ${packId}`);
				return {
					packs: lockPack(state.packs, packId),
				};
			}
			return state;
		});
	},
	updatePackState: (
		packId: number,
		newState: 'available' | 'locked',
		timer: number
	) => {
		set(state => ({
			packs: updatePackState(state.packs, packId, newState, timer),
		}));
	},
});

export const usePackStore = create<PackState>()(
	persist(packSlice, {
		name: 'packs-storage',
		storage: createJSONStorage(() => localStorage),
	})
);
