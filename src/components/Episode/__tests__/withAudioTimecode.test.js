import React from 'react';
import { mount, shallow } from 'enzyme';
import { EpisodeWrapper, getTimecode } from '../withAudioTimecode.jsx';

const Component = () => <div>Component</div>;
const WithAudioTimecodeInstance = EpisodeWrapper(Component);

const episode = {
	id: 1,
    name: "First Meeting",
    url: "https://ia801403.us.archive.org/7/items/rgpep1/rgp%20ep1%20edited.m4a",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/59dc7611333507.560f6146728cf.jpg"
};

const listen = {
	id: 1,
	timecode: 30,
	active: 1,
};

describe('EpisodeWrapper', () => {
	test('EpisodeWrapper mounts', () => {
        const wrapper = shallow(<WithAudioTimecodeInstance episode={episode} />);
        expect(wrapper.exists()).toBe(true);
    });

	test('EpisodeWrapper getTimecode function returns null if listen not set for episode', () => {
        const wrapper = shallow(<WithAudioTimecodeInstance episode={episode} />);
		expect(wrapper.props().timecode).toBe(undefined);
    });

	describe('getTimecode', () => {
		test('when listening data exists, the timecode is returned', () => {
			expect(getTimecode(listen, episode)).toEqual(30);
		});
		test('when listening data or episode doesnt exist, the timecode is not returned', () => {
			expect(getTimecode(null, episode)).toBe(null);
			expect(getTimecode(listen, null)).toBe(null);
		});
	});
});
