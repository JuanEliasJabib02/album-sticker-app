import { describe, it, expect } from 'vitest';
import { useAlbumStore } from './album-store';
import { createInitialAlbum } from '../lib/utils';

describe('useAlbumStore', () => {
	it('should initialize album state correctly', () => {
		const { initializeAlbum, isInitialized } = useAlbumStore.getState();

		expect(isInitialized).toBe(false);

		initializeAlbum();

		expect(useAlbumStore.getState().isInitialized).toBe(true);
		expect(useAlbumStore.getState().album).toEqual(createInitialAlbum());
	});
});
