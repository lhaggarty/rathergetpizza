export const listenSave = (payload) => (dispatch) => {
	dispatch({
		type: 'LISTEN_SAVE',
		payload: payload,
	});
};

export const removeListenState = () => (dispatch) => {
	dispatch({
		type: 'REMOVE_LISTEN_STATE',
		payload: true,
	});
};

export const setLoadingState = () => (dispatch) => {
	dispatch({
		type: 'SET_LOADING_STATE',
		payload: true,
	});
};

export const fetchError = (payload) => (dispatch) => {
	dispatch({
		type: 'FETCH_ERROR',
		payload: payload,
	});
};

export const setEpisodes = (payload) => (dispatch) => {
	dispatch({ type: 'SET_EPISODES', payload: payload });
};

export const setReleasedEpisodes = (payload) => (dispatch) => {
	dispatch({ type: 'SET_RELEASED_EPISODES', payload: payload });
};

export const setInstagram = (payload) => (dispatch) => {
	dispatch({
		type: 'SET_INSTAGRAM',
		payload: payload,
	});
};

export const setDate = (payload) => (dispatch) => {
	dispatch({
		type: 'SET_DATE',
		payload: payload,
	});
};
