import React from 'react';
import LoadingCard from './LoadingCard.jsx';

const LoadingList = ({ list }) => (
    <div className="loading--list">
        {list.map((item, key) => (
        <LoadingCard key={key} />
    ))}
    </div>
);

export default LoadingList;
