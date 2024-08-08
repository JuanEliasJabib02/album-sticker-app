import { usePackStore } from '../../store/pack-store/pack-store';
import PackCard from './pack-card';

export default function PackList() {
	const { packs, openPack } = usePackStore(state => ({
		packs: state.packs,
		openPack: state.openPack,
	}));

	return (
		<div
			className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4
    gap-4'
		>
			{packs.map(pack => (
				<PackCard key={pack.id} pack={pack} openPack={openPack} />
			))}
		</div>
	);
}
