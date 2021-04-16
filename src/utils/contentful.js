import { createClient } from 'contentful';
import {
	CONTENTFUL_TOKEN_PREVIEW,
	CONTENTFUL_TOKEN_PRODUCTION,
	CONTENTFUL_SPACE,
	CONTENTFUL_ENV,
} from '../store/constants/contentfulConstants';

export const getContentfulParameters = (isPreview = false, resolveLinks = false) => {
	// preview-mode uses different 'accessToken' and 'host' values
	const accessToken = isPreview ? CONTENTFUL_TOKEN_PREVIEW : CONTENTFUL_TOKEN_PRODUCTION;
	const hostValue = isPreview ? 'preview' : 'cdn';
	const host = `${hostValue}.contentful.com`;

	return {
		accessToken,
		host,
		resolveLinks,
		space: CONTENTFUL_SPACE,
		environment: CONTENTFUL_ENV,
		removeUnresolved: false,
	};
};

export const getClient = (isPreview = false, resolveLinks = false) => {
	const params = getContentfulParameters(isPreview, resolveLinks);
	return createClient(params);
};

export const fetchContentfulData = async (slug, contentType, options = {}, isPreview = false) => {
	const client = getClient(isPreview, true);

	const allData = await client
		.getEntries({
			content_type: contentType,
			'fields.name': slug,
			'fields.application': 'rathergetpizza',
			locale: 'en-US',
			include: 10,
			...options,
		})
		.catch((err) => {
			throw Error(err);
		});
	return allData;
};

export const removeQueryParam = (param) => {
	const urlParams = new URLSearchParams(window.location.search);
	urlParams.delete(param);
	const newUrl = window.location.pathname + urlParams.toString();
	if (window.history.replaceState) {
	   window.history.replaceState({}, null, newUrl);
	}
};
