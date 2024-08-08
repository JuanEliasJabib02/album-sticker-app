import {
	fetchCharactersByIds,
	fetchFilmsByIds,
	fetchStarshipsByIds,
} from '../../services/star-war-api';
import {
	Character,
	Film,
	Starship,
} from '../../services/starwar-api-interfaces';
import { Pack, PackConfig } from '../../types/types';
import { CHARACTER_IDS, MOVIE_IDS, STARSHIP_IDS } from '../consts';

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

export const getRandomConfig = (): PackConfig =>
	Math.random() < 0.5
		? { movies: 1, characters: 3, starships: 1 }
		: { movies: 0, characters: 3, starships: 2 };

export async function generateSinglePack(): Promise<{
	movies: Film[];
	characters: Character[];
	starships: Starship[];
}> {
	const config = getRandomConfig();

	const filmIds =
		config.movies > 0 ? getRandomIds(config.movies, MOVIE_IDS) : [];
	const characterIds = getRandomIds(config.characters, CHARACTER_IDS);
	const starshipIds = getRandomIds(config.starships, STARSHIP_IDS);

	const [filmsData, charactersData, starshipsData] = await Promise.all([
		fetchFilmsByIds(filmIds),
		fetchCharactersByIds(characterIds),
		fetchStarshipsByIds(starshipIds),
	]);

	console.log('executed');

	const pack_stickers = {
		filmsData,
		charactersData,
		starshipsData,
	};

	console.log('pack_stickers', pack_stickers);
	return {
		movies: filmsData,
		characters: charactersData,
		starships: starshipsData,
	};
}
const getRandomIds = (count: number, ids: number[]): number[] => {
	const shuffledIds = ids.sort(() => 0.5 - Math.random());
	return shuffledIds.slice(0, count);
};
