import React from 'react';
import EpisodeListContainer from '../../containers/EpisodeListContainer';

function Listen({ date, fetchEpisodes, setDate }) {
        return(
            <div className="listen page">
				<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-12 col-sm-10 col-md-10 py-4">
					<h4>Listen</h4>
					<p>You can stream the archive here</p>
					</div>
				</div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 py-5">
                        <EpisodeListContainer type="listen" />
                    </div>
                </div>
				</div>
            </div>
        )
};

export default Listen;
