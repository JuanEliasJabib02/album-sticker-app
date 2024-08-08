import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Pack } from '../../types/types';
import {
	createInitialPacks,
	lockPack,
	updatePackState,
	tickPackTimers,
	generateSinglePack,
} from '../../lib/helpers/pack-helpers';
import {
	Character,
	Film,
	Starship,
} from '../../services/starwar-api-interfaces';

interface PackState {
	packs: Pack[];
	isModalOpen: boolean;
	openedPackData: {
		movies: Film[];
		characters: Character[];
		starships: Starship[];
	} | null;
	actionsCompleted: boolean;
	setActionsCompleted: (completed: boolean) => void;
	closeModal: () => void;
	initializePacks: () => void;
	openPack: (packId: number) => void;
	updatePackState: (
		packId: number,
		newState: 'available' | 'locked' | 'opened',
		timer: number
	) => void;
	tickTimers: () => void;
	resetPacks: () => void;
}

const packSlice: StateCreator<
	PackState,
	[['zustand/persist', unknown]]
> = set => ({
	packs: createInitialPacks(),
	isModalOpen: false,
	openedPackData: null,
	actionsCompleted: false,
	setActionsCompleted: (completed: boolean) =>
		set({ actionsCompleted: completed }),
	initializePacks: () => set({ packs: createInitialPacks() }),

	openPack: (packId: number) => {
		const packOpeningProcess = async () => {
			const newPack = await generateSinglePack();
			console.log(newPack);

			set(state => ({
				packs: lockPack(state.packs, packId),
				isModalOpen: true,
				openedPackData: newPack,
				actionsCompleted: false,
			}));
		};

		packOpeningProcess();
	},

	updatePackState: (
		packId: number,
		newState: 'available' | 'locked' | 'opened',
		timer: number
	) => {
		set(state => ({
			packs: updatePackState(state.packs, packId, newState, timer),
		}));
	},

	tickTimers: () => {
		set(state => ({
			packs: tickPackTimers(state.packs),
		}));
	},

	closeModal: () => {
		set({
			isModalOpen: false,
			openedPackData: null,
		});
	},
	resetPacks: () => {
		set({
			packs: createInitialPacks(),
		});
	},
});

export const usePackStore = create<PackState>()(
	persist(packSlice, {
		name: 'packs-storage',
		storage: createJSONStorage(() => localStorage),
	})
);
