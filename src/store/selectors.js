import nestedProperty from 'nested-property';

export const episodeListByTypeSelector = (state, type) => nestedProperty.get(state, `global.${type}`);

export const listenForEpisodeSelector = (state, { id }) => {
	const listen = nestedProperty.get(state, 'global.listen');
	if (!listen) return null;
	return listen.find(item => item.id === id);
};

export const navMenuSelector = (state) => nestedProperty.get(state, 'global.navMenu');

export const dateSelector = (state) => nestedProperty.get(state, 'global.date');

export const loadingSelector = (state) => nestedProperty.get(state, 'global.loading');

export const loadedSelector = (state) => nestedProperty.get(state, 'global.loaded');
