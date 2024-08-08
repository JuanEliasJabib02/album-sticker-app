import { Pack } from '../../types/types';
import { Button } from '../ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function PackCard({
	pack,
	openPack,
}: {
	pack: Pack;
	openPack: (packId: number) => void;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Pack #{pack.id}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					{pack.state === 'available'
						? 'Available'
						: pack.state === 'locked'
						? `Locked (${pack.timer}s)`
						: 'Opened'}
				</p>
			</CardContent>
			<CardFooter>
				<Button
					variant={'default'}
					onClick={() => openPack(pack.id)}
					disabled={pack.state !== 'available'}
				>
					{pack.state === 'available' ? 'OPEN' : 'LOCKED'}
				</Button>
			</CardFooter>
		</Card>
	);
}
