import { parseListen } from '../parsers';

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
			const listen = parseListen(state, action);
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
			const { archive, episodes } = action.payload;
			return {
				...state,
				archive,
				episodes,
				loading: false,
				loaded: true,
			};
		case 'RESET_EPISODES':
			return {
				...state,
				episodes: [],
				archive: [],
				loading: false,
				loaded: false,
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
