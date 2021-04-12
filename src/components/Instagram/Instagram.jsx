import React from 'react';
import InstagramFeed from './InstagramFeed.jsx';
const routeList = ['/about'];
const rootClass = 'instagram';

const InstagramFeedContainer = ({ history, posts }) => {
	const pathname = nestedProperty.get(history, 'location.pathname');
	if (!routeList.includes(pathname)) return null;

	return (
		<div className={`${rootClass} container`}>
			<div className="row">
				<h4 className="">Follow us on Instagram</h4>
			</div>
			{posts && <InstagramFeed posts={posts.slice(0, 6)} />}
		</div>
	);
};

export default InstagramFeedContainer;
