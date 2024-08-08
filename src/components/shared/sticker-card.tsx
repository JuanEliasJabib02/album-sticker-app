import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function StickerCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>A New Hope</CardTitle>
				<CardDescription>Movie</CardDescription>
			</CardHeader>
			<CardContent>
				<p>ID number: 1</p>
			</CardContent>
			<CardFooter>
				<p className='p-2 bg-purple-500 rounded-lg'>Special</p>
			</CardFooter>
		</Card>
	);
}
