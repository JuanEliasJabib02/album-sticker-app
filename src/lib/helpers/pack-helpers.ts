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

export const lockPack = (packs: Pack[], packId: number): Pack[] => {
	return packs.map(pack => ({
		...pack,
		state:
			pack.id === packId
				? 'opened'
				: pack.state === 'opened'
				? 'opened'
				: 'locked',
		timer: pack.id === packId ? 0 : 60,
	}));
};

export const updatePackState = (
	packs: Pack[],
	packId: number,
	newState: 'available' | 'locked' | 'opened',
	timer: number
): Pack[] => {
	return packs.map(pack =>
		pack.id === packId ? { ...pack, state: newState, timer } : pack
	);
};

export const tickPackTimers = (packs: Pack[]): Pack[] => {
	return packs.map(pack => {
		if (pack.state === 'locked' && pack.timer > 0) {
			return { ...pack, timer: pack.timer - 1 };
		} else if (pack.timer === 0 && pack.state === 'locked') {
			return { ...pack, state: 'available', timer: 0 };
		}
		return pack;
	});
};
