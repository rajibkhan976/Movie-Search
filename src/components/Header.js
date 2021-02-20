import React from 'react';
import SearchForm from './SearchForm';
import SHOWTIME from '../img/SHOWTIME.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '../img/Avatar.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = ({ keyword, handleChangeSearchField, handleSearchMovie, handleSetShowFavorites }) => {

    return (
        <div className="row header-container">
            <div className="col-12">
                <div className="d-inline-block float-left">
                    <img className="d-inline-block img-fluid mt-3 mb-3" src={SHOWTIME} alt="logo" />
                </div>
				<Navbar expand="lg" className="d-inline-block mt-2">
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
					  <Nav.Link className="nav-text" href="#home">Home</Nav.Link>
					  <Nav.Link className="nav-text" href="#link">Movies</Nav.Link>
					  <Nav.Link className="nav-text" href="#home">TV Shows</Nav.Link>
					  <Nav.Link className="nav-text" href="#link">Anime</Nav.Link>
					  <Nav.Link className="nav-text" href="#home">Kids</Nav.Link>
					  <Nav.Link className="nav-text" href="#link" onClick={handleSetShowFavorites}>Favorites</Nav.Link>
					</Nav>
				  </Navbar.Collapse>
				</Navbar>
				<SearchForm
					keyword={keyword}
					handleChangeSearchField={handleChangeSearchField}
					handleSearchMovie={handleSearchMovie}
				/>
				<div className="d-inline-block float-right">
                    <NotificationsIcon fontSize="large" />
					<img className="d-inline-block img-fluid mt-3 ml-3 mb-3" src={Avatar} alt="avatar" />
					<span className="d-inline-block mt-3 ml-3 nav-text pt-1">Admin</span>
					<span className="d-inline-block mt-3 ml-3 caret-size">&#x25BC;</span>
                </div>
            </div>
        </div>
    );
}

export default Header;