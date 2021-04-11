import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { getDateInteger } from "../../utils/date";
import LoadingError from '../Loading/LoadingError.jsx';
import LoadingList from '../Loading/LoadingList.jsx';
import Episode from '../Episode/Episode.jsx';

const EpisodeList = (props) => {
	const { date, setDate, fetchEpisodes, history, episodes, loading, loaded } = props;
	const currentDate = getDateInteger();

	useEffect(() => {
		if (!date || date !== currentDate || !episodes.length) {
			fetchEpisodes();
			setDate(currentDate);
		} else if (history.location.search.includes('refresh')) {
			fetchEpisodes();
		}
	}, [fetchEpisodes, episodes, history, date, setDate, currentDate]);

	// otherwise display loading state
	// if (episodes && episodes.length) return <LoadingList list={Array(3).fill()} />;
	if (loading === true && loaded === false) return <LoadingList list={Array(3).fill()} />;

	// return error if epsiodes not returned after loading
	if (loading === false && loaded === false) return <LoadingError />;

	// return episodes when loaded
	return (
		<div className="episode--list">
	        {episodes.map((episode,key) => (
	            <Episode episode={episode} key={key}/>
	        ))}
    	</div>
	);
};

EpisodeList.propTypes = {
	date: PropTypes.string,
	fetchEpisodes: PropTypes.func,
	setDate: PropTypes.func,
	history: PropTypes.object,
	episodes: PropTypes.array,
};

export default EpisodeList;
