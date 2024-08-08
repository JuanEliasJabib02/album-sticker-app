import { useState } from 'react';
import { useAlbumStore } from '../../store/album-store/album-store';
import { Album } from '../../types/types';
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
	const { album } = useAlbumStore(state => ({
		album: state.album,
		addStickerToAlbum: state.addStickerToAlbum,
		removeStickerFromAlbum: state.removeStickerFromAlbum,
	}));

	const section: keyof Album =
		type === 'Movie' ? 'movies' : type === 'Character' ? 'characters' : 'ships';

	const exist = Boolean(album[section][id]);
	const [isAdded, setIsAdded] = useState(exist);

	return (
		<Card className='max-w-xs'>
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
					{!isAdded && exist && (
						<Button
							variant={'secondary'}
							onClick={() => {
								onRemove();
								setIsAdded(true);
							}}
						>
							Discard
						</Button>
					)}
					{!isAdded && !exist && (
						<Button
							onClick={() => {
								onAdd();
								setIsAdded(true);
							}}
						>
							Add to album
						</Button>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
