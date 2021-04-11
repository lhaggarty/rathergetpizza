import request from './utils/request'
import { setLoadingState, setEpisodes, fetchError, setReleasedEpisodes } from './store/actions';

export const fetchEpisodes = (params) => dispatch => {
	console.debug('params', params);
    dispatch(setLoadingState());
	const domain = process.env[`REACT_APP_${process.env.NODE_ENV.toUpperCase()}_URL`];
    request.get(`${domain}/db/episodes.json`).then( (res) => {

        res = res.reverse().map(episode => {
            episode.style = {backgroundImage: 'url(' + episode.image + ')'};
            return episode;
        });
        dispatch(setEpisodes(res));
		res = res.filter(episode => episode.released === true);
		dispatch(setReleasedEpisodes(res));;
    }).catch(e => {
		console.log('catch', e);
        dispatch(fetchError(e.response))
    });
};
