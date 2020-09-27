// import React from 'react';
//
// // const SearchBar = () => {
// //   return <input />;
// // }
//
// class SearchBar extends React.Component{
//   render(){
//     return <input />;
//   }
// }

import React , { Component } from 'react';

class SearchBar extends Component{

  constructor(props){
      super(props);
      this.state ={ term : ' '};
  }
  render(){
    //return <input onChange={this.onInputChange}/>;
    //return <input onChange={event =>console.log(event.target.value) }/>
    return (
      <div className="search-bar">
        <label for="site-search">Search the site: </label>
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}
          type="search"
          aria-label="Search through site content"
          id="site-search" 
          name="q"
        />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
    //console.log(event.target.value);
    console.log(event);
  }
}

export default SearchBar;
