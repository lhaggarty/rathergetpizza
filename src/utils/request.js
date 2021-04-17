import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
	if (response.status === 204 || response.status === 205) {
		return null;
	}
	return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

const fetchRequest = async (url, options) => (
	await fetch(url, options).then(checkStatus).then(parseJSON)
);

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
const request = {
	__esModule: true,
	get: (url, options) => fetchRequest(url, options),
	default: (url, options) => fetchRequest(url, options),
};
//console.log('request', typeof request.get('http://localhost:3000/db/episodes.json'));
export default request;
