import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange }) => {
    return (
        <div className='title'>
            <input 
            type='search' 
            id='search' 
            placeholder='Search for books' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;