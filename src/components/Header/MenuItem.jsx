import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const checkActive = (match, location, item) => {
	if (!match || !location) return false;
	if (match.isExact) return true;
	if (location.pathname === item.link) return true;
	return false;
};

const MenuItem = ({ item }) => {
	const className = item.class || '';
	return (
	    <li>
	        <NavLink
				className={`${className} link--text link--black`}
				activeClassName="active"
				isActive={(match, location) => checkActive(match, location, item)}
				to={item.link}
			>
				{item.name}
	        </NavLink>
	    </li>
	);
};

MenuItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default MenuItem;
