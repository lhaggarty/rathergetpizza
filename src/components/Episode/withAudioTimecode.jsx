import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { listenForEpisodeSelector } from '../../store/selectors';

export const getTimecode = (listen, episode) => {
	return (listen && episode)
		? listen.timecode : null;
};

export const EpisodeWrapper = (Component) => {
	return class extends React.PureComponent {
		constructor(props) {
	   		super(props);
			// create a ref to store the textInput DOM element
		   	this.audioRef = React.createRef();
		}

		componentDidMount() {
			const { listen, episode } = this.props;
			this.timecode = getTimecode(listen, episode);
			if (this.timecode) this.audioRef.current.currentTime = this.timecode;
		}

		render() {
			const { episode, pauseListenSave } = this.props;
			return(
				<Component
					episode={episode}
					pauseListenSave={pauseListenSave}
					audioRef={this.audioRef}
					timecode={this.timecode}
				/>
			);
		}
	}
}

EpisodeWrapper.propTypes = {
    episode: PropTypes.object,
	pauseListenSave: PropTypes.func,
	listen: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
    const listen = listenForEpisodeSelector(state, ownProps.episode);
	return { listen };
};

const withAudioTimecode = compose(
	connect(mapStateToProps),
	EpisodeWrapper
);

export default withAudioTimecode;
