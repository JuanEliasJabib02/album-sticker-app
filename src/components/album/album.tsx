/* Movies: 6 stickers
Characters: 82 stickers
Ships: 36 stickers */

import { useAlbumStore } from '../../store/album-store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export default function Album() {
	const { album } = useAlbumStore();

	console.log(album);

	return (
		<Tabs defaultValue='movies'>
			<TabsList>
				<TabsTrigger value='movies'>Movies</TabsTrigger>
				<TabsTrigger value='characters'>Characters</TabsTrigger>
				<TabsTrigger value='ships'>Ships</TabsTrigger>
			</TabsList>
			<TabsContent value='movies'>Movies content</TabsContent>
			<TabsContent value='characters'>Characters content</TabsContent>
			<TabsContent value='ships'>Ships</TabsContent>
		</Tabs>
	);
}
