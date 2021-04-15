import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Loading/Loading.jsx';

const LoadableComponent = loadable(() => import('./Contact'), {
	fallback: <Loading />,
});

function LoadableContact() {
	return <LoadableComponent />;
}

export default LoadableContact;
