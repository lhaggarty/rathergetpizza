import React from 'react';
import { loadingImage, loadingImageBg } from './constants';
import './LoadingCard.scss';
const rootClass = 'loading--card';

const LoadingCard = () => (
    <div className={rootClass}>
        <div className="card--image-background" style={loadingImageBg}>
            <img alt="loading"
                 src={loadingImage} />
        </div>
        <h4 className={`${rootClass}__name`}>Loading...</h4>
    </div>
);

export default LoadingCard;
