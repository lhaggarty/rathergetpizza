import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { PLATFORMS_EXT, PLATFORMS_INT } from '../../../store/constants/LandingContants';
import Landing from '../Landing.jsx';

describe('<Landing />', () => {
	it('External platform links render as expected', () => {
		const wrapper = shallow(<Landing />);
		expect(wrapper.find('[data-platform="external"]').length).toEqual(PLATFORMS_EXT.length);
	});

	it('Internal platform links render as expected', () => {
		const wrapper = shallow(<Landing />);
		expect(wrapper.find('[data-platform="internal"]').length).toEqual(PLATFORMS_INT.length);
	});
});
