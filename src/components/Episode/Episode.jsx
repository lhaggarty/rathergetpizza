import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { listenSave } from '../../store/actions';
import withAudioTimecode from './withAudioTimecode.jsx';
import './Episode.scss';

export const rootClass = 'episode--card';

const isDivisbleBy5 = (num) => !(parseInt(num) % 3);

export const getTime = (episode, dispatch, e) => {
	const { currentTime } = e.target;
	if (currentTime && isDivisbleBy5(currentTime)) {
		const payload = { id: episode.id || 0, timecode: currentTime };
		return dispatch(listenSave(payload));
	}
};

export const setTime = (timecode, audioRef) => {
	if (!isNaN(timecode) && audioRef.current.currentTime) {
		audioRef.current.currentTime = timecode;
	}
};

export const Episode = ({ episode, audioRef, timecode }) => {
	const dispatch = useDispatch();
	return (
		<div className={rootClass}>
			<button
				className={`${rootClass}__button`}
				onClick={() => audioRef.current.play()}
				aria-label={episode.name}
			>
				<div className={`${rootClass}__image-background`} style={episode.style}>
					<img src={episode.image} alt={episode.name} />
				</div>
				<h4 className={`${rootClass}__name`}>{episode.name}</h4>
			</button>
			<audio
				className={`${rootClass}__audio`}
				id={`audio-${episode.id}`}
				ref={audioRef}
				onLoadedData={() => setTime(timecode, audioRef)}
				onTimeUpdate={(e) => getTime(episode, dispatch, e)}
				controls
			>
				<source src={episode.url} type="audio/mpeg" />
			</audio>
		</div>
	);
};

Episode.propTypes = {
	episode: PropTypes.object,
	audioRef: PropTypes.object,
};

export default withAudioTimecode(Episode);
