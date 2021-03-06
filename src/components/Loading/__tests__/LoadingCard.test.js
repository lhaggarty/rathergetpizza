import React from 'react';
import { mount } from 'enzyme';
import LoadingCard from '../LoadingCard';

describe('Loading Card', () => {
	test('mounts successfully', () => {
		const wrapper = mount(<LoadingCard />);
		expect(wrapper.exists()).not.toBe(false);
	});
	test('background image is set', () => {
		const renderedComponent = mount(<LoadingCard />);
		expect(renderedComponent.find('img').props().src.length > 1).toBe(true);
		expect(
			renderedComponent
				.find('.loading--card__image-background')
				.props()
				.style.backgroundImage.indexOf('url') > -1,
		).toBe(true);
	});
});
