import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';
function App() {
	return (
		<main className='bg-red-500 min-h-screen w-screen '>
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
