import React, { Component } from 'react';
import { localURL } from './index'; 

class WorkoutButton extends Component {
  handleButtonClick = () => {
    console.log("Button clicked");
    fetch(localURL+'/api/do_something', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server as needed
        console.log(data.message);
      });
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>Generate a workout</button>
    );
  }
}

export default WorkoutButton;
