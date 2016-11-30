// this js is automatically loaded

// Import the react library
import React from 'react';
import ReactDOM from 'react-dom';

// Create a component
const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};

//Render the component to the screen
Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
