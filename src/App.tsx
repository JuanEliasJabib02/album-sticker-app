import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';
import { initializeAlbum } from './services/api';
function App() {
	const album = initializeAlbum();

	console.log('album-exist', album);
	return (
		<main className='bg-red-500 min-h-screen w-screen '>
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
