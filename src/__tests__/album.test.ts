import { describe, it, expect } from 'vitest';
import { initializeAlbum } from '../services/api';
import { Album } from '../types/types';

describe('Album Initialization', () => {
	it('should initialize an empty album with three sections', () => {
		const album: Album = initializeAlbum();
		expect(album).toEqual({
			movies: {},
			characters: {},
			ships: {},
		});
	});
});
