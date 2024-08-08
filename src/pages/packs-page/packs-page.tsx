import PackModal from '../../components/pack/pack-modal';
import PackList from '../../components/pack/packs-list';
import ResetPacksButton from '../../components/pack/reset-packs';

export default function PackPage() {
	return (
		<div>
			<div className='flex justify-between'>
				<h1 className='text-6xl text-foreground font-bold mb-8'>Packs</h1>
				<ResetPacksButton />
			</div>
			<PackList />
			<PackModal />
		</div>
	);
}
