import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingList from '../LoadingList';
const placeholderList = Array(3).fill();

describe('Loading List', () => {
	// beforeEach(() =>{
	// })
	test('mounts successfully', () => {
		const wrapper = shallow(<LoadingList list={placeholderList} />);
		expect(wrapper.exists()).not.toBe(false);
	});
	test('list render', () => {
		const wrapper = mount(<LoadingList list={placeholderList} />);
		//wrapper.setProps({list: placeholderList});
		console.log('prop', wrapper.props().list);
		expect(wrapper.props().list.length > 2).toBe(true);
		expect(wrapper.find('.loading--list').html().length > 1).toBe(true);
	});
});
