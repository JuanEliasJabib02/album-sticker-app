import { useEffect } from 'react';
import { usePackStore } from '../../store/pack-store/pack-store';

export default function GlobalTimer() {
	const tickTimers = usePackStore(state => state.tickTimers);

	useEffect(() => {
		const interval = setInterval(() => {
			tickTimers();
		}, 1000);
		return () => clearInterval(interval);
	}, [tickTimers]);

	return null;
}
