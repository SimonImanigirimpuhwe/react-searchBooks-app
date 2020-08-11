import React from 'react';

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