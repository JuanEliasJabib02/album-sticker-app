import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';
import Layout from '../components/layout/layout';
import AlbumPage from '../pages/album-page/album-page';
import StickersPage from '../pages/stickers-page/stickers-page';

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
			{
				path: 'get-stickers',
				element: <StickersPage />,
			},
		],
	},
]);
