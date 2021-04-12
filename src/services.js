import request from './utils/request';
import { setLoadingState, setEpisodes, fetchError, setReleasedEpisodes } from './store/actions';

export const fetchEpisodes = (params) => (dispatch) => {
	dispatch(setLoadingState());
	request
		.get(`db/episodes.json`)
		.then((res) => {
			res = res.reverse().map((episode) => {
				episode.style = { backgroundImage: 'url(' + episode.image + ')' };
				return episode;
			});
			dispatch(setEpisodes(res));
			res = res.filter((episode) => episode.released === true);
			dispatch(setReleasedEpisodes(res));
		})
		.catch((e) => {
			console.info('catch', e);
			dispatch(fetchError(e.response));
		});
};
