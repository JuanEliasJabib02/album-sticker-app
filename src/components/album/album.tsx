/* Movies: 6 stickers
Characters: 82 stickers
Ships: 36 stickers */

import { useAlbumStore } from '../../store/album-store/album-store';
import StickerList from '../shared/sticker-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export default function Album() {
	const { album } = useAlbumStore();

	console.log(album, 'album');

	return (
		<Tabs defaultValue='movies'>
			<TabsList className='mb-4'>
				<TabsTrigger value='movies'>Movies</TabsTrigger>
				<TabsTrigger value='characters'>Characters</TabsTrigger>
				<TabsTrigger value='ships'>Ships</TabsTrigger>
			</TabsList>
			<TabsContent value='movies'>
				<StickerList />
			</TabsContent>
			<TabsContent value='characters'>Characters content</TabsContent>
			<TabsContent value='ships'>Ships</TabsContent>
		</Tabs>
	);
}
