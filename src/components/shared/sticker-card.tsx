import { cn } from '../../lib/utils';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function StickerCard({
	title,
	isSpecial,
	id,
}: {
	id: number;
	title: string;
	isSpecial: boolean;
}) {
	return (
		<Card className='min-h-52'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>ID number: {id}</p>
			</CardContent>
			<CardFooter>
				<p
					className={cn(
						'p-2 rounded-lg',
						isSpecial ? 'bg-purple-500' : 'bg-secondary'
					)}
				>
					{isSpecial ? 'Special' : 'Regular'}
				</p>
			</CardFooter>
		</Card>
	);
}
