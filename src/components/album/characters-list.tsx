import { Character } from '../../services/starwar-api-interfaces';
import { useAlbumStore } from '../../store/album-store/album-store';
import StickerCard from '../shared/sticker-card';
import StickerCardBlocked from '../shared/sticker-card-blocked';

export default function CharacterList() {
	const { album } = useAlbumStore();
	const album_characters = Object.values(album.characters) as Character[];
	const totalCharacters = 82;

	const characterMap = album_characters.reduce((acc, character) => {
		if (character) {
			acc[character.id] = character;
		}
		return acc;
	}, {} as Record<number, Character>);

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{Array.from({ length: totalCharacters }, (_, index) => {
				const characterId = index + 1;
				const character = characterMap[characterId];

				const isSpecial = characterId >= 1 && characterId <= 20;

				return (
					<div key={characterId} className='sticker-slot'>
						{character ? (
							<StickerCard
								isSpecial={isSpecial}
								id={character.id}
								title={character.name}
							/>
						) : (
							<StickerCardBlocked id={characterId} />
						)}
					</div>
				);
			})}
		</div>
	);
}
