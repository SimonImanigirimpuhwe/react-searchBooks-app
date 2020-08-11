import React from 'react';
import BookCard from './BookCard';


const BookList  = ({ books }) => {
    return (books.length === 0) ? (<div>
        <h3 className='tex-center'>Please type somthing in search box!</h3>
    </div>) :(
        <div className='container'>
            <div className='books'>
                {
                    books.map(book => {
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