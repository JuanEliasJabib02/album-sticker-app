import { usePackStore } from '../../store/pack-store/pack-store';
import { useAlbumStore } from '../../store/album-store/album-store'; // Asegúrate de importar tu AlbumStore
import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import PackSticker from './pack-sticker';
import { Album, Sticker } from '../../types/types';

export default function PackModal() {
	const {
		isModalOpen,
		openedPackData,
		closeModal,
		actionsCompleted,
		setActionsCompleted,
	} = usePackStore();
	const { addStickerToAlbum, removeStickerFromAlbum } = useAlbumStore();

	const handleAddSticker = (section: keyof Album, sticker: Sticker) => {
		addStickerToAlbum(section, sticker);
		setActionsCompleted(true); // Assuming adding a sticker means all actions are complete, adjust as needed
	};

	const handleRemoveSticker = (section: keyof Album, stickerId: number) => {
		removeStickerFromAlbum(section, stickerId);
		setActionsCompleted(true); // Assuming removing a sticker means all actions are complete, adjust as needed
	};

	const handleCloseModal = () => {
		if (actionsCompleted) {
			closeModal();
		} else {
			alert('Please complete all actions before closing the modal.');
		}
	};

	return (
		<>
			{isModalOpen && (
				<Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className='mb-4'>Stickers on pack</DialogTitle>
						</DialogHeader>
						<div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
							{openedPackData?.movies.map(movie => (
								<PackSticker
									type={'Movie'}
									id={movie.id}
									title={movie.title}
									key={movie.id}
									onAdd={() =>
										handleAddSticker('movies', {
											id: movie.id,
											name: movie.title,
											category: 'Regular',
										})
									} // Adjust category as needed
									onRemove={() => handleRemoveSticker('movies', movie.id)}
								/>
							))}
							{openedPackData?.characters.map(character => (
								<PackSticker
									type={'Character'}
									id={character.id}
									title={character.name}
									key={character.id}
									onAdd={() =>
										handleAddSticker('characters', {
											id: character.id,
											name: character.name,
											category: 'Regular',
										})
									} // Adjust category as needed
									onRemove={() =>
										handleRemoveSticker('characters', character.id)
									}
								/>
							))}
							{openedPackData?.starships.map(starship => (
								<PackSticker
									type={'Starship'}
									id={starship.id}
									title={starship.name}
									key={starship.id}
									onAdd={() =>
										handleAddSticker('ships', {
											id: starship.id,
											name: starship.name,
											category: 'Regular',
										})
									} // Adjust category as needed
									onRemove={() => handleRemoveSticker('ships', starship.id)}
								/>
							))}
						</div>
						<DialogFooter>
							<Button onClick={handleCloseModal}>Cerrar</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</>
	);
}
