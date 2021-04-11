import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { navMenuSelector } from '../../store/selectors';
import MenuItem from './MenuItem.jsx';
import './Header.scss';

const Header = (props) => {
	const navMenu = useSelector(navMenuSelector);
	// useEffect(() => {
	// 	if (!navMenu) getNavMenu();
	// }, [navMenu, getNavMenu]);

    return(
		<header className="header">
		    <ul>
		        {navMenu.map((item, key) =>
		            <MenuItem item={item} key={key} />
		        )}
		    </ul>
	    </header>
	);
};

Header.propTypes = {
	getNavMenu: PropTypes.func,
};

export default Header;
