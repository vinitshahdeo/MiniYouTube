/**
 * @author Vinit Shahdeo
 * @description a web app using youtube api
 */
// creating a component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'XXXXXXXXXXXX'; // REPLACE IT WITH YOUR YOUTUBE API KEY

class App extends Component{

  constructor(props){
    super(props);
    this.videoSearch('Shreya Ghosal');
  }
  
  state = {
     videos : [],
     selectedVideo : null
  };
  
  videoSearch(term){
    YTSearch({key : API_KEY, term }, (videos) => {
        const [ selectedVideo ] = videos;
        this.setState({ videos, selectedVideo });
    });
  }

   render(){
     
     const { selectedVideo, videos } = this.state;
     
     return(
       <div>
        <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect = {onSelectedVideo => {this.setState({selectedVideo: onSelectedVideo})}}
          videos={videos}/>
       </div>
     );
   }
}

ReactDOM.render(<App />,document.querySelector('.container'));
