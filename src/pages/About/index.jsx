import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Loading/Loading.jsx';

const LoadableComponent = loadable(() => import('./About'), {
	fallback: <Loading />,
});

function LoadableAbout() {
	return <LoadableComponent />;
}

export default LoadableAbout;
