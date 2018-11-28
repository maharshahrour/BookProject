import React from 'react';
import SearchBar from './SearchBar';
import book from '../apis/book';
import BookList from './BookList';

class App extends React.Component{
  state={ word : [] };

  componentDidMount(){
    this.onMainSubmit('the secret');
  }

onMainSubmit  = async (word_search) => {

  const response=  await book.get('/volumes',{
      params:
      {
        q:word_search
      }
    });
  this.setState({
    word: response.data.items
  })
}



  render(){
    return (
      <div className="ui container">
        <SearchBar onUserSubmit={this.onMainSubmit}/>
        <div>
         <BookList word={this.state.word}/>
        </div>
      </div>

    );
  }
}
export default App;
