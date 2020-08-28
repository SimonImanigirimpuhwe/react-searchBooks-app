import React from 'react';
import BookCard from '../BookCard/BookCard';


const BookList  = ({ result }) => {
    return (result.length === 0) ? (<div>
        <h3 className='tex-center'>Please type something in search box!</h3>
    </div>) :(
        <div className='container'>
            <div className='books'>
                {
                    result.map(book => {
                        return (
                        <BookCard  
                            key={book.id} 
                            title={book.volumeInfo.title}
                            img={book.volumeInfo.imageLinks.thumbnail}
                            author={book.volumeInfo.authors}
                            page={book.volumeInfo.pageCount}
                            language={book.volumeInfo.language}
                            link={book.volumeInfo.infoLink}
                            />
                            )
                    })
                }
            </div>
        </div>
    );
}

export default BookList;