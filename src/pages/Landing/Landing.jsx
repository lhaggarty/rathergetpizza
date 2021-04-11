import React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import { PLATFORMS_EXT, PLATFORMS_INT } from '../../store/constants/LandingContants';

const linkClasses = 'd-flex col-6 link--text align-items-center slice';

const isOdd = (num) => num % 2;

function Landing(props) {
    return (
		<div className="landing page vh-75">
            <div className="row">
                <div className="col-sm-5 col-12 d-flex justify-content-end align-items-center">
                    <div className="">
	                    <h2 className="h4">Wouldn't you</h2>
	                    <h1>Rather Get Pizza?</h1>
	                    <h3 className="h4">Go ahead and grab a slice</h3>
                    </div>
                </div>
                <div className="col-sm-7 col-12 d-flex ">
                    <div className="row w-100 justify-content-start d-flex">
	                    <div className="card--image-background col-sm-12 col-12">
	                        <div className="row h-100 platforms">
			                    {PLATFORMS_EXT.map((item,key) => (
			                       <a className={ isOdd(key) ?
										   `${linkClasses}-${key}`
										   : `${linkClasses}-${key} justify-content-end`
									   }
			                          href={item.link} key={key} target="_blank"
									  rel="noopener noreferrer" data-platform="external"
									  >
			                               <span className="h4 px-2">{item.name}</span>
			                       </a>
							   ))}
							   {PLATFORMS_INT.map((item,key) => (
								  <Link className={ isOdd(key) ?
										  `${linkClasses}-3 justify-content-end`
										  : `${linkClasses}-3`
									  }
									 to={item.link} key={key} data-platform="internal"
									 >
									 	<span className="h4 px-2">{item.name}</span>
								  </Link>
							  ))}
							  <div className="pizza-bg"></div>
		                    </div>
	                    </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Landing;
