import { usePackStore } from '../../store/pack-store/pack-store';
import { Button } from '../ui/button';

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import PackSticker from './pack-sticker';

export default function PackModal() {
	const { isModalOpen, openedPackData, closeModal } = usePackStore();

	console.log('PackModal', openedPackData, isModalOpen);
	return (
		<>
			{isModalOpen && (
				<Dialog open={isModalOpen} onOpenChange={closeModal}>
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
								/>
							))}
							{openedPackData?.characters.map(character => (
								<PackSticker
									type={'Character'}
									id={character.id}
									title={character.name}
									key={character.id}
								/>
							))}
							{openedPackData?.starships.map(starship => (
								<PackSticker
									type={'Starship'}
									id={starship.id}
									title={starship.name}
									key={starship.id}
								/>
							))}
						</div>
						<DialogFooter>
							<Button onClick={closeModal}>Cerrar</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</>
	);
}
