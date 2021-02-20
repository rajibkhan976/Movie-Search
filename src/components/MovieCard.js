import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from "../api_integration/movieActions";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MovieCard = ({ 
	message, 
	movieInfo, 
	isFavorite, 
	handleMovieDetails, 
	handleClickFavorite,
	showFavorites,
	favoriteMovies
}) => {

    return (
        <div className="row">
			{message &&
				<div className="col-12 mt-3">
					<h5>{message}</h5>
				</div>
			}
            {movieInfo && !showFavorites ?
            <div 
				className="col-12 col-sm-4 mt-4" 
				onClick={(event) => handleMovieDetails(event, movieInfo)}
			>
				<div className="card" style={{"width": "300px", "height": "445px", "backgroundImage": `url(${movieInfo.Poster})`}}>
					<div className="favorite-icon mt-3">
					{isFavorite ?
						<FavoriteIcon color="secondary" />
						:
						<FavoriteBorderIcon style={{ color: "#fff" }} onClick={(event) => handleClickFavorite(event, movieInfo)} />
					}
					</div>
				</div>
			</div>
            :
            null
            }
			{favoriteMovies && favoriteMovies.length !== 0 && showFavorites ?
				favoriteMovies.map((element, index) => {
					return	<div 
								key={index}
								className="col-12 col-sm-4 mt-4 ml-4" 
								onClick={(event) => handleMovieDetails(event, element, index)}
							>
								<div 
									 
									className="card" 
									style={{"width": "300px", "height": "445px", "backgroundImage": `url(${element.Poster})`}}
								>
								</div>
							</div>
				})
            :
            null
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    movie: state.movieReducer.movie,
	favoriteMovies: state.movieReducer.favoriteMovies
});
  
const mapDispatchToProps = (dispatch) => ({
    movieActions: bindActionCreators(movieActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);