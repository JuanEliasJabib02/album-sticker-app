import { Album as AlbumIcon, PackageOpen } from 'lucide-react';
import NavItem from './nav-item';
/* import { ModeToggle } from '../../mode-toggle';
 */
const navItems = [
	{ href: '/', label: 'My Album', icon: <AlbumIcon /> },
	{ href: '/get-stickers', label: 'Get Stickers', icon: <PackageOpen /> },
];

export default function Aside() {
	return (
		<aside className='w-[20%] p-4 lg:block hidden border-r-2 border-r-border'>
			<div className='py-12 flex justify-center items-center'>
				<img
					src='/logo.png'
					width={60}
					height={60}
					alt='Star War Logo'
					className='w-full max-w-36'
				/>
			</div>
			{/* Just hidden it, dont have time to make a nice ui for this toggle component
			anyway here is the feature */}
			{/* 		<ModeToggle /> */}
			<nav>
				<ul className='flex flex-col gap-4'>
					{navItems.map(item => (
						<NavItem
							key={item.href}
							href={item.href}
							label={item.label}
							icon={item.icon}
						/>
					))}
				</ul>
			</nav>
		</aside>
	);
}
