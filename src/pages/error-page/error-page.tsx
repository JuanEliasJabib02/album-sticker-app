import { useRouteError } from 'react-router-dom';
import { isErrorResponse } from './is-error-response';

export default function ErrorPage() {
	const error = useRouteError();

	// TODO Back after and make a 404 and return to home here
	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>
					{isErrorResponse(error)
						? error.statusText || error.message
						: 'Unknown error'}
				</i>
			</p>
		</div>
	);
}
