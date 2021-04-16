import nestedProperty from 'nested-property';

export const epsiodesPayloader = (res) => {
	const archive = res.reverse().map((episode) => {
		episode.style = { backgroundImage: 'url(' + episode.image + ')' };
		return episode;
	});
	const episodes = archive.filter((episode) => episode.released === true);
	return { archive, episodes };
};

export const contentfulPayloader = ({ items }, field = null) => {
	if (!items.length) return null;
	if (!field) return items[0].fields;
	return nestedProperty.get(items, `0.fields.${field}`);
};
