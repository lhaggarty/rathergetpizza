import React from 'react';
import { shallow } from 'enzyme';
import EpisodeList from '../EpisodeList.jsx';
import episodeData from '../../../db/episodes.json';
import { getDateInteger } from '../../../utils/date';
jest.mock('../../../utils/request', () => require('../../../../__mocks__/request'));

describe('EpisodeList', () => {
	const props = {
		date: null,
		fetchEpisodes: () => null,
		setDate: () => null,
		history: {},
		episodes: episodeData,
		loading: false,
		loaded: true,
	};

	test('Episode List mounts', () => {
		const wrapper = shallow(<EpisodeList {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	test('if episodes exists, Episodes component is rendered', () => {
		const wrapper = shallow(<EpisodeList {...props} />);
		expect(wrapper.find('Episodes').length).toEqual(1);
	});

	test('fetchEpisodes does not run when date is current', () => {
		const fetchEpisodesSpy = jest.spyOn(props, 'fetchEpisodes');
		expect(fetchEpisodesSpy.mock.calls.length).toEqual(0);
		shallow(<EpisodeList {...props} date={getDateInteger()} />);
		expect(fetchEpisodesSpy.mock.calls.length).toEqual(0);
	});

	test('if episodes dont exists, and data is not loaded, an error is rendered', () => {
		const wrapper = shallow(<EpisodeList {...props} episodes={null} loaded={false} />);
		expect(wrapper.find('LoadingError').length).toEqual(1);
	});

	test('if episodes dont exists, and data is loading, a loading component is rendered', () => {
		const wrapper = shallow(
			<EpisodeList {...props} episodes={null} loading={true} loaded={false} />,
		);
		expect(wrapper.find('LoadingList').length).toEqual(1);
	});
});
