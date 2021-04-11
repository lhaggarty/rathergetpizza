import { connect } from "react-redux";
import { history } from "../store/store";
import { setDate } from "../store/actions";
import {
	episodeListByTypeSelector,
	loadingSelector,
	loadedSelector,
	dateSelector,
} from "../store/selectors";
import { fetchEpisodes } from "../services";
import EpisodeList from "../components/EpisodeList/EpisodeList";

const mapStateToProps = (state, ownProps) => {
	return {
		episodes: episodeListByTypeSelector(state, ownProps.type),
		loading: loadingSelector(state),
		loaded: loadedSelector(state),
		date: dateSelector(state),
		history,
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setDate: (payload) => dispatch(setDate(payload)),
    	fetchEpisodes: () => dispatch(fetchEpisodes(ownProps)),
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(EpisodeList);
