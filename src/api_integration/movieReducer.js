import { combineReducers } from 'redux';

const initialState = {
    movie: null,
    favoriteMovies: [],
	searchResult: false
};

const movieReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'GET_MOVIE':

        return { 
            ...state, 
            movie: action.data
        };
		
		case 'GET_MOVIE_BY_TITLE':

        return { 
            ...state, 
            movie: action.data,
			searchResult: true
        };
		
		case 'GET_MOVIE_BY_YEAR':

        return { 
            ...state, 
            movie: action.data,
			searchResult: true
        };
		
		case 'SAVE_FAVORITE_MOVIE':
		
        return { 
            ...state, 
            favoriteMovies: [...state.favoriteMovies, action.data]
        };

        default:

        return state;
    }
}

export default combineReducers({ movieReducer });