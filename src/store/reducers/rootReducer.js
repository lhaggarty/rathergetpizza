/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import globalReducer from './reducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
// export default combineReducers({
//     simpleReducer
// });
const createReducer = (history, injectedReducers = {}) =>
	combineReducers({
		global: globalReducer,
		router: connectRouter(history),
		...injectedReducers,
	});
export default createReducer;
