import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { ThemeProvider } from './components/layout/theme-provider';
function App() {
	return (
		<main className='bg-blue-500 min-h-screen '>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<RouterProvider router={router} />
			</ThemeProvider>
		</main>
	);
}

export default App;
