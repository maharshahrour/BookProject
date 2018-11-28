import React from 'react';

class SearchBar extends React.Component{

state={ word_search : '' };

  onInputChange =(event) =>
  {
    this.setState({ word_search : event.target.value});
  }

  onUserSubmit =(event) =>
  {
    event.preventDefault();
    this.props.onUserSubmit(this.state.word_search);

  }

  render(){
    return(
      <div className="search-bar ui segment" style={{marginTop: "3%"}} onSubmit={this.onUserSubmit}>
           <form className="ui form">
               <div className="filed">
                 <label>Book Search</label>
                 <input type="text" onChange={this.onInputChange}/>
              </div>
           </form>
      </div>
    );

  }
}

export default SearchBar;
