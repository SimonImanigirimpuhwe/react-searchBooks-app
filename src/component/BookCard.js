import React from 'react';


const BookCard = ({ title, img, author, page, language, link }) => {
    
    return (
        <div className='book-card'>
             <ul>
                <li><h2>{title}</h2></li>
                <li><img alt='book'src={img}/></li>
                <li><span>Author: </span>{author}</li>
                <li><span>Pages: </span>{page}</li>
                <li><span>Language: </span>{language}</li>
                <button className="btn"><a href={link}>Read More</a></button>
            </ul>
        </div>
    )
}

export default BookCard;