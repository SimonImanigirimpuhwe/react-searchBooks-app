import React from 'react';
import './SearchBox.css';

const SearchBox = ({handleSubmit, onInputChange }) => {
    return (
        <div className='title'>
            <h1 className='main-title'>Psychology Books</h1>
            <form className="input-container">
                <input 
                type='search' 
                id='search' 
                placeholder='Search for books' 
                required
                onChange={onInputChange}
                />
                <button onClick={handleSubmit}>Search</button>
             </form>
        </div>
    );
}

export default SearchBox;