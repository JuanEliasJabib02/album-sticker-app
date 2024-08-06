import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
function App() {
	return (
		<main className='bg-blue-500 min-h-screen w-screen '>
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
