import React, { useState, useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = ({ handleChangeSearchField, keyword, handleSearchMovie }) => {

    return (
        <div className="d-inline-block ml-5">
            <SearchBar
				value={keyword}
				onChange={(newValue) => handleChangeSearchField(newValue)}
				onCancelSearch={() => handleSearchMovie(keyword)}
				closeIcon={<SearchIcon />}
			/>
        </div>
    );
}

export default SearchForm;