import React from 'react';
import { Link } from 'react-router-dom';

const LoadingError = () => (
	<div className="d-flex justify-content-center align-items-center vh-65">
		<div className="alert alert-warning alert-dismissible fade show " role="alert">
			<div className="py-3">
				Oops! Looks like the content didn't load.
				<a href={`${window.location}?refresh`} tabIndex="0">
					Try refreshing the page.
				</a>
				<Link className="close" to="/" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</Link>
			</div>
		</div>
	</div>
);

export default LoadingError;
