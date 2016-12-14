// this js is automatically loaded

// Import the react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import Axios from 'axios';

// Create a component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }


  componentWillMount(){
    // fantastic place to load data
    console.log('app is about to render');
    Axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then( response => this.setState({ images: response.data.data }) );
      // Never Do This -
      // this.state.images = [ {}, {} ];
  }

  render(){
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  };
};

//Render the component to the screen
Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
