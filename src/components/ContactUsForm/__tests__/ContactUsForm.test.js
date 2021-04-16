import React from 'react';
import { shallow } from 'enzyme';
import { CONTACT_FORM } from '../../../store/constants/ContactConstants.js';
import ContactUsForm from '../ContactUsForm';
jest.mock('../../../utils/request', () => require('../../../../__mocks__/request'));

describe('<ContactUsForm />', () => {
	test('ContactUsForm mounts', () => {
		const wrapper = shallow(<ContactUsForm {...CONTACT_FORM} />);
		expect(wrapper.exists()).toBe(true);
	});
	test('handleSubmit submits when form is valid', () => {
		const wrapper = shallow(<ContactUsForm {...CONTACT_FORM} />);
		const instance = wrapper.instance();
		const evt = { preventDefault: () => null };
		const sendDataSpy = jest.spyOn(instance, 'sendData');

		instance.setState({ EMAIL: 'user@email.com' });
		instance.handleSubmit(evt);
		expect(sendDataSpy.mock.calls.length).toBe(1);
	});

	test('handleSubmit set state to error when form is invalid', () => {
		const wrapper = shallow(<ContactUsForm {...CONTACT_FORM} />);
		const instance = wrapper.instance();
		const evt = { preventDefault: () => null };
		const sendDataSpy = jest.spyOn(instance, 'sendData');
		instance.handleSubmit(evt);
		expect(wrapper.state().status).toBe('empty');
		expect(sendDataSpy.mock.calls.length).toBe(0);
	});
});
