import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.css';

class Home extends Component {

  render() {

    return (

      <>

      <div className="homeContainer">
      <p>Hello! Welcome to the Quiz!</p>

      <p>Click on the button below to start, we wish you a good luck.</p>

       <Link to="/questions" className="startButton"><button className="startButton">Start Quiz</button></Link> 

      </div>

      </>
      );
    }

  }

export default Home;
