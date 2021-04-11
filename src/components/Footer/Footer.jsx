import React from 'react';
const date = new Date();
const year = date.getFullYear();

const Footer = () => (
	<div className="border-top">
		<div className="container">
    <div className="row py-3 ">
        <div className="col-6 text-left">
            <span className="">
                <strong>© </strong>
                Rather Get Pizza Podcast
                <span> {year}</span>
            </span>
        </div>
        <div className="col-6 text-right">
            <span className="">
                Made with ♥ in Toronto
            </span>
        </div>
    </div>
	</div>
	</div>
);

export default Footer;
