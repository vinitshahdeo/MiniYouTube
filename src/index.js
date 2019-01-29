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


// YTSearch({key : API_KEY, term : 'Katrina Kaif'}, function(data){
//     console.log(data);
// });

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component{

  constructor(props){

    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('Shreya Ghosal');

  }
  videoSearch(term){
    YTSearch({key : API_KEY, term : term}, (videos) => {
        //console.log(videos);
        //this.setState({videos});
        //this.setState({videos : videos})
        this.setState({
          videos : videos,
          selectedVideo : videos[0]
        })
    });
  }
   render(){
     return(
       <div>
        <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => {this.setState({selectedVideo})}}
          videos={this.state.videos}/>
       </div>
     );
   }
}

// const App = function() {
//   return <div>Hiii</div>;
// }

// the above code is converted into Javascript

/*

"use strict";

var App = function App() {
  return React.createElement(
    "div",
    null,
    "Hiii"
  );
};

*/

ReactDOM.render(<App />,document.querySelector('.container'));

//placing the component in DOM



/*

const App = function(){
  return <ol>
    <li>vinit</li>
    <li>shreya</li>
  	</ol>;
}

the above code gets converted into

"use strict";

var App = function App() {
  return React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "vinit"
    ),
    React.createElement(
      "li",
      null,
      "shreya"
    )
  );
};

*/
