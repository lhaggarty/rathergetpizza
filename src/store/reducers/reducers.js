export const initialState = {
	navMenu: [
		{ id: 1, name: 'Home', link: '/' },
		{ id: 2, name: 'Listen', link: '/listen' },
		{ id: 3, name: 'Contact', link: '/contact' },
		{
			id: 4,
			name: 'Archive',
			link: '/archive',
			class: 'd-none',
		},
	],
	episodes: [],
	archive: [],
	loading: true,
	loaded: false,
	listen: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DATE':
			return {
				...state,
				date: action.payload,
			};
		case 'LISTEN_SAVE':
			const { id, timecode } = action.payload;
			const listenList = state.listen.filter((item) => item.id !== id);
			const listenEntry = {
				active: 1,
				id: id,
				timecode: timecode,
			};
			const listen = [...listenList, listenEntry];
			const newState = {
				...state,
				listen,
			};
			return newState;
		case 'REMOVE_LISTEN_STATE':
			delete state.listen;
			return state;
		case 'SET_LOADING_STATE':
			return {
				...state,
				loading: true,
				loaded: false,
			};
		case 'FETCH_ERROR':
			return {
				...state,
				loading: false,
				loaded: false,
			};
		case 'SET_EPISODES':
			return {
				...state,
				archive: action.payload,
			};
		case 'SET_RELEASED_EPISODES':
			return {
				...state,
				episodes: action.payload,
				loading: false,
				loaded: true,
			};
		case 'SET_INSTAGRAM':
			return {
				...state,
				instagram: action.payload.posts,
			};
		default:
			return state;
	}
};
