import {
	fetchCharactersByIds,
	fetchFilmsByIds,
	fetchStarshipsByIds,
} from './star-war-api';
import { Character, Film, Starship } from './starwar-api-interfaces';

export const fetchFilms = async (ids: number[]): Promise<Film[]> => {
	return fetchFilmsByIds(ids);
};

export const fetchCharacters = async (ids: number[]): Promise<Character[]> => {
	return fetchCharactersByIds(ids);
};

export const fetchStarships = async (ids: number[]): Promise<Starship[]> => {
	return fetchStarshipsByIds(ids);
};
