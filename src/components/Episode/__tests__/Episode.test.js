import React from 'react';
import { shallow } from 'enzyme';
import Episode, { rootClass, getTime } from '../Episode.jsx';

const episode = {
	id: 1,
    name: "First Meeting",
    url: "https://ia801403.us.archive.org/7/items/rgpep1/rgp%20ep1%20edited.m4a",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/59dc7611333507.560f6146728cf.jpg"
};

const listen = {
	id: 1,
	timecode: 0,
	active: 1,
};

const props = { episode, listen };

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: () => jest.fn(),
	connect: jest.fn(),
}));

jest.mock('../withAudioTimecode.jsx', () => {
	return (Component) => (Component);
});

describe('<Episode />', () => {
    it('should render when episode prop exists', () => {
		const wrapper = shallow(<Episode {...props} />);
        expect(wrapper.find(`.${rootClass}`).length).toEqual(1);
    });

	it('should render elements', () => {
		const wrapper = shallow(<Episode {...props} />);
		expect(wrapper.find(`.${rootClass}__audio`).length).toEqual(1);
		expect(wrapper.find(`.${rootClass}__button`).length).toEqual(1);

    });
});
