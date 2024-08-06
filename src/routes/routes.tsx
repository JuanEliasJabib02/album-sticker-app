import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';
import Layout from '../components/layout/layout';
import AlbumPage from '../pages/album-page/album-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,

		children: [
			{
				index: true,
				element: <AlbumPage />,
			},
		],
	},
]);
