import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

interface NavItemProps {
	href: string;
	label: string;
	icon?: React.ReactNode;
}

export default function NavItem({ href, label, icon }: NavItemProps) {
	const location = useLocation();
	const isActive = location.pathname === href;

	return (
		<li>
			<Link
				to={href}
				className={clsx(
					'flex items-center py-4 px-2 rounded-lg font-medium text-foreground',
					isActive ? 'bg-primary text-primary-foreground' : null
				)}
			>
				{icon && <span className='mr-2'>{icon}</span>}
				{label}
			</Link>
		</li>
	);
}
