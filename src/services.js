import request from './utils/request';
import { fetchContentfulData } from './utils/contentful';
import { contentfulPayloader, epsiodesPayloader } from './store/payloaders';
import { setLoadingState, setEpisodes, fetchError } from './store/actions';

export const fetchEpisodes = (params = {}) => async (dispatch) => {
	dispatch(setLoadingState());
	try {
		const res = await fetchContentfulData('episodes', 'contentList');
		const contentfulResponse = contentfulPayloader(res, 'jsonData');
		const payloadedResponse = epsiodesPayloader(contentfulResponse);
		dispatch(setEpisodes(payloadedResponse));
	} catch (e) {
		dispatch(fetchCache(params));
	}
};

export const fetchCache = (params) => (dispatch) => {
	request
		.get(`db/episodes.json`)
		.then((res) => {
			const payloadedResponse = epsiodesPayloader(res);
			dispatch(setEpisodes(payloadedResponse));
		})
		.catch((e) => {
			console.info('catch', e);
			dispatch(fetchError(e.response));
		});
};
