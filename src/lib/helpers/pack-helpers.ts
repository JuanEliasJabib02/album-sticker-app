import { Pack } from '../../types/types';

export const createInitialPacks = (): Pack[] => {
	const savedPacks = localStorage.getItem('packs');
	if (savedPacks) {
		return JSON.parse(savedPacks);
	}
	return [
		{ id: 1, state: 'available', timer: 0 },
		{ id: 2, state: 'available', timer: 0 },
		{ id: 3, state: 'available', timer: 0 },
		{ id: 4, state: 'available', timer: 0 },
	];
};

export const updatePackState = (
	packs: Pack[],
	packId: number,
	newState: 'available' | 'locked',
	timer: number
): Pack[] => {
	return packs.map(pack =>
		pack.id === packId ? { ...pack, state: newState, timer } : pack
	);
};

export const lockPack = (packs: Pack[], packId: number): Pack[] => {
	return updatePackState(packs, packId, 'locked', 60);
};
