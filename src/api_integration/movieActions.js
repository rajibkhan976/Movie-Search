import * as Api from './movieApi';

export function getMovies() {
    return function(dispatch) {
        return Api.getMovies()
        .then((result) => {
            return dispatch({
                type: 'GET_MOVIE',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_MOVIE_FAILED',
                data: `Loading movie failed due to ${error}`
            });
        })
    }
}

export function getMoviesByTitle(title) {
    return function(dispatch) {
        return Api.getMoviesByTitle(title)
        .then((result) => {
            return dispatch({
                type: 'GET_MOVIE_BY_TITLE',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_MOVIE_BY_TITLE_FAILED',
                data: `Loading movie by title failed due to ${error}`
            });
        })
    }
}

export function getMoviesByYear(year) {
    return function(dispatch) {
        return Api.getMoviesByYear(year)
        .then((result) => {
            return dispatch({
                type: 'GET_MOVIE_BY_YEAR',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_MOVIE_BY_YEAR_FAILED',
                data: `Loading movie by year failed due to ${error}`
            });
        })
    }
}

export function saveFavoriteMovies(movie) {
	return function(dispatch) {
		return dispatch({
			type: 'SAVE_FAVORITE_MOVIE',
			data: movie
		})
	}
}