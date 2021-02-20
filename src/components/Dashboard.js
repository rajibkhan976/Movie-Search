import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from "../api_integration/movieActions";
import Header from './Header';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
import RegistrationForm from './RegistrationForm';
import Hero from '../img/hero.png';

const Dashboard = ({ movieActions, movie, searchResult, favoriteMovies }) => {

    const [keyword, setKeyword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = (status) => {
        setIsAuthenticated(status);
    }

    const handleChangeSearchField = (value) => {
        if (value && value.trim()) {
            setKeyword(value.trim());
        }
    }

    useEffect(() => {
        movieActions.getMovies();
    }, []);
	
	const handleSearchMovie = (searchKeyword) => {
		if (searchKeyword && searchKeyword.trim() && !isNaN(Number.parseInt(searchKeyword.trim(), 10))) {
			movieActions.getMoviesByYear(searchKeyword.trim());
		}
		if (searchKeyword && searchKeyword.trim() && isNaN(Number.parseInt(searchKeyword.trim(), 10))) {
			movieActions.getMoviesByTitle(searchKeyword.trim());
		}
	}

    const [movieInfo, setMovieInfo] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);
    const [showDetails, setShowDetails] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (movie) {
            setMovieInfo(movie);
        }
    }, [movie]);

    const handleMovieDetails = (event, movieInfo, index) => {
		event.stopPropagation();
        if (movieInfo) {
            setMovieDetails(movieInfo);
        }
		if (index) {
			let arr = [];
			arr.push(index);
			setSelectedMovie(index);
			setShowDetails(arr);
		} else {
			let arr = [];
			arr.push(-1);
			setSelectedMovie(-1);
			setShowDetails(arr);
		}
    }

    const hideDetails = (event) => {
        setShowDetails([]);
    }
	
	const [isFavorite, setIsFavorite] = useState(false);

	const handleClickFavorite = (event, movie) => {
		event.stopPropagation();
		movieActions.saveFavoriteMovies(movie);
		setIsFavorite(true);
	}
	
	const [showFavorites, setShowFavorites] = useState(false);
	
	const handleSetShowFavorites = (event) => {
		setShowFavorites(!showFavorites);
	}
	
	useEffect(() => {
		if (searchResult && searchResult === true) {
			setIsFavorite(false);
		}
	}, [searchResult]);

    return (
        <React.Fragment>
        {isAuthenticated ?
            <div className="container-fluid">
                <Header
					keyword={keyword}
                    handleChangeSearchField={handleChangeSearchField}
					handleSearchMovie={handleSearchMovie}
					handleSetShowFavorites={handleSetShowFavorites}
                />
                {movieInfo && !searchResult && !showFavorites &&
                <>
					<div className="banner-image" style={{"backgroundImage": `url(${Hero})`}}>
					</div>
                    <MovieCard 
						message={``}
						isFavorite={isFavorite}
						handleClickFavorite={handleClickFavorite}
                        movieInfo={movieInfo} 
                        handleMovieDetails={handleMovieDetails}
                    />
                </>
                }
				{movieInfo && searchResult && !showFavorites &&
                <>
                    <MovieCard 
						message={`Your Search Result`}
						isFavorite={isFavorite}
						handleClickFavorite={handleClickFavorite}
                        movieInfo={movieInfo} 
                        handleMovieDetails={handleMovieDetails}
                    />
                </>
                }
				{showFavorites && favoriteMovies && favoriteMovies.length !== 0 &&
					<MovieCard 
						message={`Your Favorites`}
						showFavorites={showFavorites}
                        favoriteMovies={favoriteMovies} 
                        handleMovieDetails={handleMovieDetails}
                    />
				}
                {showDetails &&
                    <MovieDetails 
						selectedMovie={selectedMovie}
						showDetails={showDetails}
                        movieDetails={movieDetails}
                        hideDetails={hideDetails} 
                    />
                }
                <hr />
                <Footer />
            </div>
        :
            <RegistrationForm handleAuthentication={handleAuthentication} />
        }
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    movie: state.movieReducer.movie,
	searchResult: state.movieReducer.searchResult,
	favoriteMovies: state.movieReducer.favoriteMovies
});
  
const mapDispatchToProps = (dispatch) => ({
    movieActions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);