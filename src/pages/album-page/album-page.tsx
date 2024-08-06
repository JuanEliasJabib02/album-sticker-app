import { useAlbumStore } from '../../store/album-store';

export default function AlbumPage() {
	const { album } = useAlbumStore();

	console.log(album);
	return <div>Album page</div>;
}
