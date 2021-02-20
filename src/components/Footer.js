import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = ({}) => {

    return (
        <div className="row mt-4 mb-4 footer-container">
            <div className="col-12 col-sm-3">
				<div className="mb-4">
					<FacebookIcon fontSize="large" />
					<InstagramIcon className="ml-3" fontSize="large" />
					<TwitterIcon className="ml-3" fontSize="large" />
					<YouTubeIcon className="ml-3" fontSize="large" />
				</div>
				<div className="mt-4">
					<a href="#" className="nav-text mb-2 d-block">Auto Description</a>
					<a href="#" className="nav-text d-block">Jobs</a>
				</div>
				<div className="mt-4">
					<a href="#" className="nav-text custom-border pl-1 mb-2 d-block">Service Code</a>
					<span> &#169; 1997-2016 Showtime, Inc.</span>
				</div>
            </div>
            <div className="col-12 col-sm-3 mt-5">
                <a href="#" className="nav-text mb-2 d-block">Help Center</a>
                <a href="#" className="nav-text d-block">Terms of Use</a>
            </div>
            <div className="col-12 col-sm-3 mt-5">
                <a href="#" className="nav-text mb-2 d-block">Media Center</a>
                <a href="#" className="nav-text d-block">Privacy</a>
            </div>
        </div>
    );
}

export default Footer;