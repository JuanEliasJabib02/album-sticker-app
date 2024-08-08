import { Starship } from '../../services/starwar-api-interfaces';
import { useAlbumStore } from '../../store/album-store/album-store';
import StickerCard from '../shared/sticker-card';
import StickerCardBlocked from '../shared/sticker-card-blocked';

export default function ShipList() {
	const { album } = useAlbumStore();
	const album_ships = Object.values(album.ships) as Starship[];
	const totalShips = 36;
	const shipMap = album_ships.reduce((acc, ship) => {
		if (ship) {
			acc[ship.id] = ship;
		}
		return acc;
	}, {} as Record<number, Starship>);

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{Array.from({ length: totalShips }, (_, index) => {
				const shipId = index + 1;
				const ship = shipMap[shipId];

				const isSpecial = shipId >= 1 && shipId <= 10;

				return (
					<div key={shipId} className='sticker-slot'>
						{ship ? (
							<StickerCard
								isSpecial={isSpecial}
								id={ship.id}
								title={ship.name}
							/>
						) : (
							<StickerCardBlocked id={shipId} />
						)}
					</div>
				);
			})}
		</div>
	);
}
