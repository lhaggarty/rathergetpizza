
export const initialState = {
    navMenu: [
            {id: 1, name: 'Home', component: "LandingComponent", link: "/"},
            {id: 2, name: 'Listen', component: "ListenComponent", link: "/listen"},
            {id: 3, name: 'About', component: "AboutComponent", link: "/about"},
			{id: 4, name: 'Archive', component: "ArchiveComponent", link: "/archive", class: "d-none"}
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
       		console.log('SET_DATE', action);
		    return {
				...state,
				date: action.payload
		    };
        case 'LISTEN_SAVE':
            console.log(state,action.payload);
			const { id, timecode } = action.payload;
			const listenList = state.listen.filter(item => item.id !== id);
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
	            console.log(state,action.payload);
	            delete state.listen;
				return state;
        case 'SET_LOADING_STATE':
            console.log('SET_LOADING_STATE');
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case 'FETCH_ERROR':
            console.log('FETCH_ERROR');
            return {
                ...state,
                loading: false,
                loaded: false
            };
        case 'SET_EPISODES':
            console.log('set episodes');
            return {
                ...state,
                archive: action.payload,
            };
		case 'SET_RELEASED_EPISODES':
		console.log('set released episodes');
	            return {
	                ...state,
	                episodes: action.payload,
	                loading: false,
	                loaded: true
	            };
		case 'SET_INSTAGRAM':
	        console.log('SET_INSTAGRAM');
	        return {
	             ...state,
				 instagram: action.payload.posts
	        };
        default:
            return state
    }
}
