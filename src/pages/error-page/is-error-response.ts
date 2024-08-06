interface ErrorResponse {
	statusText?: string;
	message?: string;
}

export function isErrorResponse(error: unknown): error is ErrorResponse {
	return (
		typeof error === 'object' &&
		error !== null &&
		('statusText' in error || 'message' in error)
	);
}
