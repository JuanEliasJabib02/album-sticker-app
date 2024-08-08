import { Character, Film, Starship } from './starwar-api-interfaces';

const apiUrl = 'https://swapi.dev/api';

export async function fetchFilmById(id: number): Promise<Film> {
	const response = await fetch(`${apiUrl}/films/${id}/`);
	if (!response.ok) throw new Error(`Error fetching film with ID ${id}`);
	return response.json();
}

export async function fetchCharacterById(id: number): Promise<Character> {
	const response = await fetch(`${apiUrl}/people/${id}/`);
	if (!response.ok) throw new Error(`Error fetching character with ID ${id}`);
	return response.json();
}

export async function fetchStarshipById(id: number): Promise<Starship> {
	const response = await fetch(`${apiUrl}/starships/${id}/`);
	if (!response.ok) throw new Error(`Error fetching starship with ID ${id}`);
	return response.json();
}

export async function fetchFilmsByIds(ids: number[]): Promise<Film[]> {
	const results = await Promise.allSettled(ids.map(id => fetchFilmById(id)));
	return results
		.filter(result => result.status === 'fulfilled')
		.map(result => (result as PromiseFulfilledResult<Film>).value);
}

export async function fetchCharactersByIds(
	ids: number[]
): Promise<Character[]> {
	const results = await Promise.allSettled(
		ids.map(id => fetchCharacterById(id))
	);
	return results
		.filter(result => result.status === 'fulfilled')
		.map(result => (result as PromiseFulfilledResult<Character>).value);
}

export async function fetchStarshipsByIds(ids: number[]): Promise<Starship[]> {
	const results = await Promise.allSettled(
		ids.map(id => fetchStarshipById(id))
	);
	return results
		.filter(result => result.status === 'fulfilled')
		.map(result => (result as PromiseFulfilledResult<Starship>).value);
}
