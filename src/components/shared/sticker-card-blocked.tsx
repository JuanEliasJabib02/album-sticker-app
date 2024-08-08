import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function StickerCardBlocked({ id }: { id: number }) {
	return (
		<Card className='min-h-52'>
			<CardHeader>
				<CardTitle>Blocked</CardTitle>
			</CardHeader>
			<CardContent>
				<p>ID number: {id}</p>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}
