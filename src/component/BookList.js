import './BookList.css';
import React from 'react';

const BookList =(props) =>
{
  const word=props.word.map((word_search) =>{
   return (
     <div className="book-list" key={word_search.id}>
         <img src={word_search.volumeInfo.imageLinks.thumbnail} alt="book"/>
         <div className="content">
             <label>Title : {word_search.volumeInfo.title}</label><br/>
             <label>Description : {word_search.volumeInfo.description}</label><br/>
         </div>
     </div>
   );
  })
   return <div className="image-list">{word}</div>;
}

export default BookList;
