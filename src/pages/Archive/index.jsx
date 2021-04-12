import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Loading/Loading.jsx';

const LoadableComponent = loadable(() => import('./Archive'), {
	fallback: <Loading />,
});

function LoadableArchive() {
	return <LoadableComponent />;
}

export default LoadableArchive;
