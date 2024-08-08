import { useAlbumStore } from '../../store/album-store/album-store';
import { Album, Sticker } from '../../types/types';
import { Button } from '../ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function PackSticker({
	title,
	id,
	type,
	onAdd,
	onRemove,
}: {
	title: string;
	id: number;
	type: 'Movie' | 'Character' | 'Starship';
	onAdd: () => void;
	onRemove: () => void;
}) {
	const { album, addStickerToAlbum, removeStickerFromAlbum } = useAlbumStore(
		state => ({
			album: state.album,
			addStickerToAlbum: state.addStickerToAlbum,
			removeStickerFromAlbum: state.removeStickerFromAlbum,
		})
	);

	// Determina la sección del álbum en base al tipo
	const section: keyof Album =
		type === 'Movie' ? 'movies' : type === 'Character' ? 'characters' : 'ships';

	// Verifica si el sticker ya está en el álbum
	const exist = Boolean(album[section][id]);

	const handleAdd = () => {
		const newSticker: Sticker = { id, name: title, category: 'Special' }; // Ajusta la categoría si es necesario
		addStickerToAlbum(section, newSticker);
	};

	const handleRemove = () => {
		removeStickerFromAlbum(section, id);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{type}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>ID number: {id}</p>
			</CardContent>
			<CardFooter className='flex flex-col gap-4 items-start'>
				<p className='p-2 bg-purple-500 rounded-lg'>Special</p>
				<div className='w-full flex justify-center'>
					{exist ? (
						<Button variant={'destructive'} onClick={onRemove}>
							Discard
						</Button>
					) : (
						<Button onClick={onAdd}>Add to album</Button>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
