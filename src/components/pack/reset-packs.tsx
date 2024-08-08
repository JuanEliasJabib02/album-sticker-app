import { usePackStore } from '../../store/pack-store/pack-store';
import { Button } from '../ui/button';

export default function ResetPacksButton() {
	const { resetPacks } = usePackStore(state => ({
		resetPacks: state.resetPacks,
	}));

	return (
		<Button variant={'outline'} onClick={resetPacks}>
			Reset Packs
		</Button>
	);
}
