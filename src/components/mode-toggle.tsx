import { useTheme } from './layout/theme-provider';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

export default function ModeToggle() {
	const { setTheme, theme } = useTheme();

	const changeThemeTo = theme === 'dark' ? 'light' : 'dark';
	const label = `Change to ${
		changeThemeTo.charAt(0).toUpperCase() + changeThemeTo.slice(1)
	}`;

	return (
		<div className='flex items-center space-x-2'>
			<Switch
				id='switch-theme'
				onCheckedChange={() => setTheme(changeThemeTo)}
			/>
			<Label htmlFor='switch-theme'>{label}</Label>
		</div>
	);
}
