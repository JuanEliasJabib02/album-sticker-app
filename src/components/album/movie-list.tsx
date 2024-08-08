import { Film } from '../../services/starwar-api-interfaces';
import { useAlbumStore } from '../../store/album-store/album-store';
import StickerCard from '../shared/sticker-card';
import StickerCardBlocked from '../shared/sticker-card-blocked';

export default function MovieList() {
	const { album } = useAlbumStore();
	const album_movies = Object.values(album.movies) as Film[];
	const totalMovies = 6;

	const movieMap = album_movies.reduce((acc, movie) => {
		if (movie) {
			acc[movie.id] = movie;
		}
		return acc;
	}, {} as Record<number, Film>);

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{Array.from({ length: totalMovies }, (_, index) => {
				const movieId = index + 1;
				const movie = movieMap[movieId];

				return (
					<div key={movieId} className='sticker-slot'>
						{movie ? (
							<StickerCard isSpecial={true} id={movie.id} title={movie.name} />
						) : (
							<StickerCardBlocked id={movieId} />
						)}
					</div>
				);
			})}
		</div>
	);
}
