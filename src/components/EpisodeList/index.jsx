import React from 'react';
import loadable from '@loadable/component';
import Loading from '../components/Loading/Loading.jsx';

const LoadableComponent = loadable(() => import('./EpisodeList'), {
	fallback: <Loading />,
});

function LoadableEpisodeList() {
	return <LoadableComponent />;
}

export default LoadableEpisodeList;
