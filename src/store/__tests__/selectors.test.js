import { episodeListByTypeSelector, listenForEpisodeSelector } from '../Selectors';
import episodeData from '../../db/episodes.json';

const state = {
	global: {
		episodes: episodeData.slice(0, 5),
		archive: episodeData,
		listen: [
			{ id: 1, timecode: 30 },
		]
	}
};

describe('episodeListByTypeSelector', () => {
	test('episodeListByTypeSelector returns archive if type is archives', () => {
		const archive = episodeListByTypeSelector(state, 'archive');
		expect(archive).toEqual(state.global.archive);
	});

	test('episodeListByTypeSelector returns episodes if type is episodes', () => {
		const episodes = episodeListByTypeSelector(state, 'episodes');
		expect(episodes).toEqual(state.global.episodes);
	});
});

describe('listenForEpisodeSelector', () => {
	test('listenForEpisodeSelector returns listen data when it exists', () => {
		const listen = listenForEpisodeSelector(state, { id: 1 });
		expect(listen).toEqual(state.global.listen[0]);
	});

	test('listenForEpisodeSelector returns undefined when data does not exist', () => {
		const listen = listenForEpisodeSelector(state, { id: 2 });
		expect(listen).toEqual(undefined);
	});
});
