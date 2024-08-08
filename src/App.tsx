import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { ThemeProvider } from './components/layout/theme-provider';
import GlobalTimer from './components/shared/globa-timer';
function App() {
	return (
		<main className='bg-blue-500 min-h-screen '>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<GlobalTimer />
				<RouterProvider router={router} />
			</ThemeProvider>
		</main>
	);
}

export default App;
