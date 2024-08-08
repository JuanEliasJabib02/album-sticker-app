import { Outlet } from 'react-router-dom';
import Aside from './aside/aside';

export default function Layout() {
	return (
		<div className='flex relative min-h-screen bg-background max-w-screen-xl'>
			<Aside />

			<main className='flex-1 p-5 md:pl-[300px]'>
				<Outlet />
			</main>
		</div>
	);
}
