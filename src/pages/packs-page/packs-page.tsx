import PackModal from '../../components/pack/pack-modal';
import PackList from '../../components/pack/packs-list';

export default function AlbumPage() {
	return (
		<div>
			<h1 className='text-6xl text-foreground font-bold mb-8'>Packs</h1>
			<PackList />
			<PackModal />
		</div>
	);
}
