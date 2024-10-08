/* Movies: 6 stickers
Characters: 82 stickers
Ships: 36 stickers */

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import CharacterList from './characters-list';
import MovieList from './movie-list';
import ShipList from './ships-list';

export default function Album() {
	return (
		<Tabs defaultValue='movies'>
			<TabsList className='mb-4'>
				<TabsTrigger value='movies'>Movies</TabsTrigger>
				<TabsTrigger value='characters'>Characters</TabsTrigger>
				<TabsTrigger value='ships'>Ships</TabsTrigger>
			</TabsList>
			<TabsContent value='movies'>
				<MovieList />
			</TabsContent>
			<TabsContent value='characters'>
				<CharacterList />
			</TabsContent>
			<TabsContent value='ships'>
				<ShipList />
			</TabsContent>
		</Tabs>
	);
}
