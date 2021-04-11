import React from 'react';
import { shallow } from 'enzyme';
import MenuItem, { checkActive } from '../MenuItem.jsx';

describe('MenuItem', () => {
	const item = { id: 1, name: 'Home', component: "LandingComponent", link: "/" };

	test('MenuItem mounts', () => {
		const wrapper = shallow(<MenuItem item={item} />);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('NavLink').length).toEqual(1);
	});

	describe('checkActive', () => {
		test('checkActive returns false when match or location is not set', () => {
			expect(checkActive(null, {}, item)).toBeFalsy();
			expect(checkActive({}, null, item)).toBeFalsy();
		});

		test('checkActive returns true when match is set', () => {
			expect(checkActive({ isExact: true }, {}, item)).toBeTruthy();
		});

		test('checkActive returns true when location is the items link', () => {
			expect(checkActive({}, {pathname: '/'}, item)).toBeTruthy();
		});

		test('checkActive returns true when location is the items link', () => {
			expect(checkActive({}, {pathname: '/different'}, item)).toBeFalsy();
		});
	});
});
