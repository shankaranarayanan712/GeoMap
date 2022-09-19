/** @format */

export const ErrorFallback = ({ error }: { error: { message: string } }) => {
	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<strong>{error.message}</strong>
			<p>Please try after sometime</p>
		</div>
	);
};
