import React from 'react';
import PropTypes from 'prop-types';

const InstagramFeed = ({ posts }) => (
	<div className="instagram--list row py-4">
		{posts.map((post, key) => {
			post.imageStyle = { backgroundImage: `url(${post.picture.url})` };
			post.text = post.captionText.substring(0, 100) + '...';
			return (
				<div key={key} className="col-12 col-sm-6">
					<div className="episode--card">
						<a href={post.link} target="_blank" rel="noopener noreferrer">
							<div className="card--image-background" style={post.imageStyle}>
								<img src={post.picture.url} alt={post.captionText} />
							</div>
						</a>
						<span className="no-link-text">{post.text}</span>
					</div>
				</div>
			);
		})}
	</div>
);
InstagramFeed.propTypes = {
	posts: PropTypes.array,
};
export default InstagramFeed;
