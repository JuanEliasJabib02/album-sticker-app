import StickerCard from './sticker-card';

export default function StickerList() {
	const dummyArray = Array.from({ length: 12 });

	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{dummyArray.map((_, index) => (
				<StickerCard key={index} />
			))}
		</div>
	);
}
